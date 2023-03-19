const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log('event' + event)
    event.preventDefault();

    // remove the hidden class from the button 
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // show prompt
    promptEvent.prompt();
    // reset the deferred prompt variable, it can only be used once
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);

});

window.addEventListener('appinstalled', (event) => {
    //clear promt 
    console.log('install hit')
    window.deferredPrompt = null;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
