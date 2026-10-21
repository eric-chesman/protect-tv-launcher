# Protect TV for TizenBrew

Small site module that launches http://10.10.10.61:8097/ inside TizenBrew.
It does not install a separate Samsung home-screen app. It depends on the existing
local Dell/Portainer viewer; the TV's IP must be allowed by the viewer.

No dependencies, service process, API keys, camera URLs, certificates, or camera
credentials are included. The manifest includes only the local viewer address.
The viewer controls remote navigation. TizenBrew controls its own exit/return path.

Install through TizenBrew's GitHub module manager using `eric-chesman/protect-tv-launcher`. This launcher still needs validation on the TV.

The viewer UI is hosted on the Dell server and loads when the module launches. Server updates are managed separately through the private viewer repository and Portainer. This module does not configure server updates.

Once installed, launch Protect TV and test one Low-quality stream, the camera grid,
remote navigation, background/resume, and prolonged viewing. TizenBrew autolaunch
may be configured after these tests succeed. No performance or HTTPS behavior fix
is guaranteed until tested in this runtime.

Module format: https://github.com/reisxd/TizenBrew/blob/main/docs/MODULES.md
