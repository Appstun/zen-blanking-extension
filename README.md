# Blanking for Zen Browser

When you open [Zen](https://zen-browser.app/) you will see a blank page. On this page you cannot open any extension pop up (clicking on a extension icon).

This extension fix this: It opens a `about:blank` page, so you can open extension popups. If you open Zen truh a link the extension will not open the blank page.
Tested in Zen version 1.17.15b.

## Installation

> [!WARNING]
> During the installation you will set a config (`xpinstall.signatures.required`) in `about:config` to `false`. Setting this will allow you to install extensions that are not signed by Mozilla Firefox. So careful what you install.

1. Download the latest [Release](https://github.com/Appstun/zen-blanking-extension/releases/latest).
2. Go to `about:config` and set `xpinstall.signatures.required` to `false`.
3. To install the downloaded extension go to `about:addons`, click on the cog wheel next to "Manage Your Extensions" and then "Install Add-on From File..." <br>
   ![AddExtensionFromFile](https://github.com/user-attachments/assets/02e445e1-524b-436c-b79a-3a36ae4caf73) <br>
   This will open a file dialog where you select the downloaded extension (ZIP file).
4. On the pop up click "Add" to install the extension. <br>
   ![AddExtensionPopUp](https://github.com/user-attachments/assets/8f22ae8d-3312-4283-96f8-04b50ec66066)


> [!NOTE]
> Please note that you cannot set `xpinstall.signatures.required` to `true`again after installation or the extension gets disabled.
