import React from 'react'
import Item from './item'
import a71 from '../img/a71.jpg'
import oneplus7pro from '../img/oneplus_7pro.jpg'
import oneplusnord from '../img/oneplus_nord.jpg'
import iphoneX from '../img/iphone-x.jpg'
import iphone12 from '../img/iphone-12.jpg'
import asusrog3 from '../img/asus-rog-phone-3.jpg'
import oneplus6t from '../img/one-plus-6t.jpg'
import pixel4a from '../img/pixel4a.jpg'
import motoGpower from '../img/motoGPower.jpg'
import nokia from '../img/Nokia 5.4.jpg'
import reactDom from 'react-dom'




const layout = props => {

  return (
    
    <div>
      <Item 
        name="OnePlus Nord N100 Midnight Frost Unlocked Smartphone​, 4GB+64GB, US Version, Model BE2011" 
        price='200' 
        src={oneplusnord}
        weblink= 'https://www.amazon.com/OnePlus-Midnight-Unlocked-Smartphone-BE2011/dp/B07XM8GDWC'>
      </Item>

      <Item 
        name="ASUS ROG Gaming Phone 3 (Strix Edition) ZS661KS Dual-SIM 256GB ROM + 8GB RAM Android Factory Unlocked 5G Smartphone (Black) - International Version" 
        price='$1,097.62 + $105.80' 
        src={asusrog3}
        weblink='https://www.amazon.com/ASUS-ZS661KS-Dual-SIM-Unlocked-Smartphone/dp/B08F5GGZKS/ref=sr_1_6?dchild=1&keywords=asus+rog+3&qid=1616834965&sr=8-6'>
      </Item>

      <Item 
        name="Samsung Galaxy A71 A715F 128GB Dual-SIM GSM Unlocked Phone (International Variant/US Compatible LTE) - Prism Crush Black" 
        price='$386.99' 
        src={a71}
        weblink='https://www.amazon.com/Samsung-SM-A715F-Caribbean-Cameras-Android/dp/B084GBC1KH/ref=sr_1_6?dchild=1&keywords=a71&qid=1616838845&sr=8-6'>
      </Item>
      
      <Item 
        name="OnePlus 6T A6013 Dual Sim 128GB/8GB (Mirror Black) - Factory Unlocked - GSM ONLY, NO CDMA" 
        price='$298.24' 
        src={oneplus6t}
        weblink='https://www.amazon.com/OnePlus-A6013-128GB-Mirror-Black/dp/B07XVNDQMR/ref=pd_di_sccai_2?pd_rd_w=dTgV4&pf_rd_p=c9443270-b914-4430-a90b-72e3e7e784e0&pf_rd_r=60E4R03VYESGAMCXM7NJ&pd_rd_r=5c8a885c-1b93-460d-9f06-cf4a8cb3ee1e&pd_rd_wg=VpnJC&pd_rd_i=B07XVNDQMR&psc=1'>
      </Item>

      <Item 
        name = "Moto G Power | 2021 | 3-Day Battery | Unlocked | Made for US by Motorola | 4/64GB | 48MP Camera | Gray" 
        price = "$229.99"
        weblink = "https://www.amazon.com/Power-Battery-Unlocked-Motorola-Camera/dp/B08NWBY8YJ/ref=pb_allspark_session_sims_desktop_1?pd_rd_w=r7T23&pf_rd_p=bfefd6e2-acb1-463d-94d0-38a6e00f41d3&pf_rd_r=G3YJJPGST011NBGW0E2V&pd_rd_r=bbee6f15-ec25-4355-91a7-8b5dacb87d29&pd_rd_wg=ODSCE&pd_rd_i=B08NWBY8YJ&psc=1"
        src = {motoGpower}>
      </Item>

      <Item 
        name = "Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black" 
        weblink = "https://www.amazon.com/Google-Pixel-4a-Unlocked-Smartphone/dp/B08CFSZLQ4/ref=psdc_2407749011_t2_B08SV6KJTT" 
        price = "$350" 
        src ={pixel4a}>
      </Item>

      <Item 
        name = "OnePlus 7 Pro 256GB Android, Smartphone 6.67 inch, 48MP Main Lens Triple Camera (Mirror Grey, Single SIM" 
        weblink = "https://www.amazon.com/OnePlus-Android-Smartphone-Triple-Camera/dp/B08G9LNZLC/ref=sr_1_3?dchild=1&keywords=oneplus%2B7%2Bpro&qid=1616840487&sr=8-3&th=1"
        price = "$450"
        src = {oneplus7pro}>
      </Item>

      <Item 
        name = "Apple iPhone X (64GB, Space Gray) [Locked] + Carrier Subscription" 
        weblink = "https://www.amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B07VMNX6XH/ref=sr_1_2_sspa?dchild=1&keywords=iphone+x&qid=1616841871&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUkgwWDg3S09WSUNBJmVuY3J5cHRlZElkPUEwMzk3MTI2MkFSUkJQODhIMENWSSZlbmNyeXB0ZWRBZElkPUEwNjk5NzMyMUw4SDQwR1RPWEhFWCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
        price = "$890"
        src = {iphoneX}>
      </Item>

      <Item 
        name = "New Apple iPhone 12 Pro (256GB, Silver) [Locked] + Carrier Subscription" 
        weblink = "https://www.amazon.com/Apple-iPhone-Silver-Carrier-Subscription/dp/B08L5MR8MK/ref=sr_1_2_sspa?dchild=1&keywords=iphone+12&qid=1616841925&s=electronics&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFYRlpMQkhJUDJMOVAmZW5jcnlwdGVkSWQ9QTA0NzkzNTkxWkhUQUgxOTJUS0NIJmVuY3J5cHRlZEFkSWQ9QTA5MTA1NTEyTjBTSkw5RDI3VFdXJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
        price = "$1099"
        src = {iphone12}>
      </Item>

      <Item 
        name = "Nokia 5.4 Smartphone with a 6.39” HD+ Screen, 48MP Quad Camera, Qualcomm Snapdragon 662, 2-Day Battery and Android Upgrades in Polar Night, Dual SIM, 4/128 GB" 
        weblink = "https://www.amazon.com/Nokia-Smartphone-Qualcomm-Snapdragon-Upgrades/dp/B08STXNT4K/ref=sr_1_1_sspa?dchild=1&keywords=nokia+5.4&qid=1616842169&s=electronics&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExMzFHNlAwN1lITlUyJmVuY3J5cHRlZElkPUEwMDIyNzU0MzhFQkdLTE1YSkxLVSZlbmNyeXB0ZWRBZElkPUEwNDQxNzA5MldLUlEyNTc4VTQ2SyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
        price = "$249.99"
        src = {nokia}>
      </Item>

    </div>
  )
}

export default layout













// const productInfo = {
//   1: {
//     name: 'OnePlus Nord N100 Midnight Frost Unlocked Smartphone​, 4GB+64GB, US Version, Model BE2011',
//     weblink: 'https://www.amazon.com/OnePlus-Midnight-Unlocked-Smartphone-BE2011/dp/B07XM8GDWC',
//     price : '$179.99',
//     imageSrc : {oneplusnord}
//   },

//   2: {
//     name: "ASUS ROG Gaming Phone 3 (Strix Edition) ZS661KS Dual-SIM 256GB ROM + 8GB RAM Android Factory Unlocked 5G Smartphone (Black) - International Version",
//     weblink: 'https://www.amazon.com/ASUS-ZS661KS-Dual-SIM-Unlocked-Smartphone/dp/B08F5GGZKS/ref=sr_1_6?dchild=1&keywords=asus+rog+3&qid=1616834965&sr=8-6',
//     price : '$1,097.62' ,
//     imageSrc : {asusrog3}
//   },

//   3: {
//     name: 'Samsung Galaxy A71 A715F 128GB Dual-SIM GSM Unlocked Phone (International Variant/US Compatible LTE) - Prism Crush Black',
//     weblink: 'https://www.amazon.com/Samsung-SM-A715F-Caribbean-Cameras-Android/dp/B084GBC1KH/ref=sr_1_6?dchild=1&keywords=a71&qid=1616838845&sr=8-6',
//     price : '$386.99' ,
//     imageSrc : {a71}
//   },

//   4: {
//     name: "OnePlus 6T A6013 Dual Sim 128GB/8GB (Mirror Black) - Factory Unlocked - GSM ONLY, NO CDMA" ,
//     weblink: 'https://www.amazon.com/OnePlus-A6013-128GB-Mirror-Black/dp/B07XVNDQMR/ref=pd_di_sccai_2?pd_rd_w=dTgV4&pf_rd_p=c9443270-b914-4430-a90b-72e3e7e784e0&pf_rd_r=60E4R03VYESGAMCXM7NJ&pd_rd_r=5c8a885c-1b93-460d-9f06-cf4a8cb3ee1e&pd_rd_wg=VpnJC&pd_rd_i=B07XVNDQMR&psc=1',
//     price : '$298.24' ,
//     imageSrc : {oneplus6t}
//   },

//   6: {
//     name: "" ,
//     weblink: "" ,
//     price : "" ,
//     imageSrc : {iphone12}
//   },

//   7: {
//     name: "" ,
//     weblink: "" ,
//     price : "" ,
//     imageSrc : {iphoneX}
//   },

//   8: {
//     name: "OnePlus 7 Pro 256GB Android, Smartphone 6.67 inch, 48MP Main Lens Triple Camera (Mirror Grey, Single SIM" ,
//     weblink: "https://www.amazon.com/OnePlus-Android-Smartphone-Triple-Camera/dp/B08G9LNZLC/ref=sr_1_3?dchild=1&keywords=oneplus%2B7%2Bpro&qid=1616840487&sr=8-3&th=1" ,
//     price : "$450" ,
//     imageSrc : {oneplus7pro}
//   },

//   9: {
//     name: "Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black" ,
//     weblink: "https://www.amazon.com/Google-Pixel-4a-Unlocked-Smartphone/dp/B08CFSZLQ4/ref=psdc_2407749011_t2_B08SV6KJTT" ,
//     price : "$350" ,
//     imageSrc : {pixel4a}
//   },

//   10: {
//     name: "Moto G Power | 2021 | 3-Day Battery | Unlocked | Made for US by Motorola | 4/64GB | 48MP Camera | Gray" ,
//     weblink: "https://www.amazon.com/Power-Battery-Unlocked-Motorola-Camera/dp/B08NWBY8YJ/ref=pb_allspark_session_sims_desktop_1?pd_rd_w=r7T23&pf_rd_p=bfefd6e2-acb1-463d-94d0-38a6e00f41d3&pf_rd_r=G3YJJPGST011NBGW0E2V&pd_rd_r=bbee6f15-ec25-4355-91a7-8b5dacb87d29&pd_rd_wg=ODSCE&pd_rd_i=B08NWBY8YJ&psc=1" ,
//     price : "$229.99" ,
//     imageSrc : {motoGpower}
//   }

// }