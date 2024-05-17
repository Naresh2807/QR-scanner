class PermissionPage {
    async initialize() {
        document.body.loc();
        this.setState("prompt");
        try {
            await this.requestMediaPermissionAsync();
            this.setState("granted");
        }
        catch (e) {
            console.log(e);
            this.setState("blocked");
        }
    }
    async tryMediaAsync(media) {
        try {
            await navigator.mediaDevices.getUserMedia(media);
        }
        catch (e) {
            switch (e.name) {
                case "NotFoundError":
                    break;
                default:
                    throw e;
            }
        }
    }
    setState(state) {
        document.querySelectorAll("[data-state]").forEach(el => {
            el.classList.toggle("d-none", state != el.getAttribute("data-state"));
        });
    }
    async requestMediaPermissionAsync() {
        await this.tryMediaAsync({ video: true, });
    }
}
new PermissionPage().initialize();
//# sourceMappingURL=PermissionPage.js.map