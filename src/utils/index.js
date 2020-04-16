export default function injectUrl(path) {
    if (!path) {
        throw new Error('not path')
    }

    // eslint-disable-next-line
    if (/\.js$/.test(path)) {
        // 在网页上加载插件内js文件
        const script = document.createElement('script')
        script.setAttribute('type', 'text/javascript')
        // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
        script.src = window.chrome.extension.getURL(path)
        script.onload = function() {
            // 放在页面不好看，执行完后移除掉
            this.parentNode.removeChild(this)
        }
        document.head.appendChild(script)
        // eslint-disable-next-line
    } else if (/\.css$/.test(path)) {
        // 在网页上加载插件内css文件
        const link = document.createElement('link')
        link.href = window.chrome.extension.getURL(path)
        link.rel = 'stylesheet'
        document.head.appendChild(link)
    }
}

export const insertElementIcons = () => {
    const elementIcons = document.createElement('style')
    elementIcons.type = 'text/css'
    const ttf = window.chrome.extension.getURL('fonts/element-icons.ttf')
    elementIcons.textContent = `
        @font-face {
            font-family: "element-icons";
            src: url('${window.chrome.extension.getURL('fonts/element-icons.woff')}') format('woff'),
            url('${ttf}') format('truetype'); /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        }
    `
    document.head.appendChild(elementIcons)
}
