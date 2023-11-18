import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adaptic Health',
  description: 'Clinical trial design assistance for academic and industry sponsors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-5XKKLQN1Z9"></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-5XKKLQN1Z9');
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PCJQ7G93');
          `,
        }} 
      />
      <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
            __html: `
              (function(apiKey){
                  (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
                  v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
                      o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
                      y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
                      z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

                      // Call this whenever information about your visitors becomes available
                      // Please use Strings, Numbers, or Bools for value types.
                      pendo.initialize({
                          visitor: {
                              id:              'VISITOR-UNIQUE-ID'   // Required if user is logged in
                              // email:        // Recommended if using Pendo Feedback, or NPS Email
                              // full_name:    // Recommended if using Pendo Feedback
                              // role:         // Optional

                              // You can add any additional visitor level key-values here,
                              // as long as it's not one of the above reserved names.
                          },

                          account: {
                              id:           'ACCOUNT-UNIQUE-ID' // Required if using Pendo Feedback
                              // name:         // Optional
                              // is_paying:    // Recommended if using Pendo Feedback
                              // monthly_value:// Recommended if using Pendo Feedback
                              // planLevel:    // Optional
                              // planPrice:    // Optional
                              // creationDate: // Optional

                              // You can add any additional account level key-values here,
                              // as long as it's not one of the above reserved names.
                          }
                      });
              })('8fb64ca0-56cb-420a-6527-90cf07336c42');
            `,
            }}
          />
      <body className={inter.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PCJQ7G93"
          height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {children}
        </body>
    </html>
  )
}