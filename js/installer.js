Installer=(function(){

	return {
		install:function(hideInstallerCb) {
			let self=this;
			if (self.deferredInstall) {
				self.deferredInstall.prompt().then(function() {
					return self.deferredInstall.userChoice;
				}).then(function(choice) {
					hideInstallerCb();
				}).catch(function(reason) {
					hideInstallerCb();
				});
			}
		},
		check:function (showInstallerCb) {
			if (document.location.href.indexOf("user_mode=app")==-1) {
				if ('serviceWorker' in navigator) {
					if (!navigator.serviceWorker.controller) {
					  navigator.serviceWorker.register('worker.php', { scope: './'}).then(function(reg) {
					    console.log('Service worker has been registered for scope: '+ reg.scope);
					  });
					}
				}
				var self=this;
				window.addEventListener('beforeinstallprompt', function(e) {
					self.promptTriggered = true;
					e.preventDefault();
					self.deferredInstall = e;
					showInstallerCb();
				});
			}
		}
	}

})();