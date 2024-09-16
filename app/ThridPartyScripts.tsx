import Script from "next/script";



const ThirdParyScripts = () => {
    return (
        <>
            <Script
                id="google-ads-script-1"
                async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" />
            <Script id="google-ads-script-2" strategy="afterInteractive">
                {` window.googletag = window.googletag || { cmd: [] };
      googletag.cmd.push(function () {
        googletag.defineSlot('/79805449/Article_Page_Side_Desktop', [160, 600], 'div-gpt-ad-1719309347743-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });`}
            </Script>
        </>
    );
}

export default ThirdParyScripts;