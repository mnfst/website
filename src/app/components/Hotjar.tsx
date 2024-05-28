import Script from 'next/script'
import { HOTJAR_ID } from '../constants'
import React from 'react'

const HotjarSnippet: React.FC = () => {
  return (
    <div>
      <Script id="hotjar-snippet">
        {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
      </Script>
    </div>
  )
}

export default HotjarSnippet
