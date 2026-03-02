import Script from "next/script";

export const CookiebotScript: React.FC = (): React.JSX.Element => {
  return (
    <Script
      id="crisp-chat"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
              window.$crisp = [];
              window.CRISP_WEBSITE_ID = "9dc87502-2f8d-4f39-9b05-40f0d0a84d83";
              (function() {
                var d = document;
                var s = d.createElement("script");
                s.src = "https://client.crisp.chat/l.js";
                s.async = 1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
      }}
    />
  );
};
