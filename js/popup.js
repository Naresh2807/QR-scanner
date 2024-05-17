// @ts-ignore
import QrScanner from "./../libs/qr-scanner/qr-scanner.min.js";
class PopupPage {
    lstResult = document.querySelector(".list-result");
    btnVideo = document.querySelector(".btn-camera");
    lastResult;
    lastResultTime;
    currScanner;
    async initialize() {
        this.initRateUs();
        QrScanner.WORKER_PATH = "./../libs/qr-scanner/qr-scanner-worker.min.js";
        document.querySelector(".btn-image").addEventListener("click", () => this.onImageButtonClick());
        document.querySelector(".btn-tab").addEventListener("click", () => this.onTabButtonClick());
        const hasCamera = await QrScanner.hasCamera();
        if (hasCamera) {
            this.btnVideo.disabled = false;
            this.btnVideo.addEventListener("click", () => this.onVideoButtonClick());
        }
        this.addResult("DefaultText".loc(), null, true);
        this.lstResult.addDelegate("click", ".btn-copy", (_, btn) => this.onCopyToClipboardButtonClick(btn));
        document.body.loc();
    }
    async onTabButtonClick() {
        const result = await new Promise(r => {
            chrome.tabs.captureVisibleTab(null, {
                format: "png"
            }, r);
        });
        if (!result) {
            return;
        }
        const img = document.querySelector(".img-preview");
        img.exclusiveDisplay();
        img.style.backgroundImage = `url(${result})`;
        try {
            const qr = await QrScanner.scanImage(result);
            this.processResult(qr);
        }
        catch (e) {
            // No QR found
        }
    }
    async onVideoButtonClick() {
        if (this.currScanner) {
            this.currScanner.stop();
            this.currScanner = null;
            this.btnVideo.classList.add("btn-success");
            this.btnVideo.classList.remove("btn-danger");
        }
        else {
            try {
                const permission = await navigator.mediaDevices.getUserMedia({
                    video: true,
                });
                const video = document.querySelector(".video-preview");
                video.exclusiveDisplay();
                const scanner = this.currScanner = new QrScanner(video, (result) => {
                    this.processResult(result, true);
                });
                scanner.start();
                this.btnVideo.classList.add("btn-danger");
                this.btnVideo.classList.remove("btn-success");
            }
            catch (e) {
                if (e.name == "NotAllowedError") {
                    chrome.tabs.create({
                        url: "/permission.html",
                    });
                    return;
                }
                console.error(e);
                try {
                    this.currScanner.stop();
                }
                catch (e) {
                    console.error(e);
                }
                this.currScanner = null;
                this.btnVideo.classList.add("btn-success");
                this.btnVideo.classList.remove("btn-danger");
            }
        }
    }
    onImageButtonClick() {
        const txt = document.createElement("input");
        txt.type = "file";
        txt.accept = "image/*";
        txt.addEventListener("change", () => this.onImagePicked(txt));
        txt.click();
    }
    onCopyToClipboardButtonClick(el) {
        const text = el.closest(".item").content;
        navigator.clipboard.writeText(text);
    }
    async onImagePicked(txt) {
        const file = txt.files[0];
        if (!file) {
            return;
        }
        const img = document.querySelector(".img-preview");
        img.exclusiveDisplay();
        img.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
        try {
            const result = await QrScanner.scanImage(file);
            this.processResult(result);
        }
        catch (e) {
            // No QR found
        }
    }
    processResult(result, removeDuplicate) {
        if (result) {
            if (removeDuplicate) {
                if (result == this.lastResult &&
                    Date.now() - this.lastResultTime < 3000) {
                    return;
                }
            }
            let isUrl = true;
            try {
                new URL(result);
            }
            catch (e) {
                isUrl = false;
            }
            this.lastResult = result;
            this.lastResultTime = Date.now();
            this.addResult(result, isUrl ? result : null);
        }
    }
    addResult(text, url, disabled) {
        const el = document.querySelector("#template-result-item").innerHTML
            .toElement();
        el.content = text;
        el.querySelector(".text").innerText = text;
        if (url) {
            const a = el.querySelector(".link");
            a.href = url;
            a.target = "_blank";
        }
        if (disabled) {
            el.classList.add("disabled");
        }
        this.lstResult.insertBefore(el, this.lstResult.firstElementChild);
    }
    initRateUs() {
        const updateUrl = chrome.runtime.getManifest().update_url?.toLowerCase();
        const id = chrome.runtime.id;
        const storeUrl = (updateUrl && updateUrl.includes("microsoft")) ?
            `https://microsoftedge.microsoft.com/addons/detail/` + id :
            "https://chrome.google.com/webstore/detail/" + id;
        document.querySelectorAll(".btn-rate").forEach(el => el.setAttribute("href", storeUrl));
    }
}
new PopupPage().initialize();
//# sourceMappingURL=popup.js.map