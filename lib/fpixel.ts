// lib/fpixel.ts
export const FB_PIXEL_ID = '1419450969751777'

export const initFacebookPixel = () => {
  if (!window.fbq) {
    !(function(f,b,e,v,n,t,s){
      if(f.fbq) return; n=f.fbq=function(){ n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments) };
      if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0'; n.queue=[]; t=b.createElement(e); t.async=!0;
      t.src=v; s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', FB_PIXEL_ID)
    window.fbq('track', 'PageView')
  }
}

export const event = (name: string, params?: Record<string, any>) => {
  if (window.fbq) {
    window.fbq('track', name, params)
  }
}
