const allProducts = {
  items: [
    {
      id: 0,
      photo:
        "https://i.ytimg.com/vi/_oYGheLvr0k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDkNDQWnO3w1gOuO3q8H4upLw-8Ug",
      product_name: "Dell U3223QE",
      rating: 8.4,
      size: '32"',
      resolution: "3840 x 2160",
      price: 630,
      description:
        "The Dell U3223QE is ideal for programming with a 32-inch 4k screen, offering sharp text clarity and ample space for multiple windows. Its high pixel density makes reading code easier, while the IPS technology ensures wide viewing angles and accurate colors, perfect for content creation and detailed design work.",
    },
    {
      id: 1,
      photo: "https://cackle.co.nz/wp-content/uploads/2021/01/U4021QW-5.jpg",
      product_name: "Dell U4025QW",
      rating: 8,
      size: '40"',
      resolution: "5120 x 2160",
      price: 1800,
      description:
        "The Dell U4025QW is perfect for multitasking with a 40-inch ultrawide screen and 21:9 aspect ratio, providing excellent text clarity and extra horizontal space. It allows you to view multiple windows side by side, enhancing productivity. Additionally, it features integrated speakers and multiple connectivity options, making it a versatile choice for both work and entertainment.",
    },
    {
      id: 2,
      photo:
        "https://www.pcworld.com/wp-content/uploads/2023/04/pc-world-dell-s2722qc-2.jpg?quality=50&strip=all",
      product_name: "Dell S2722QC",
      rating: 8.6,
      size: '27"',
      resolution: "3840 x 2160",
      price: 300,
      description:
        "The Dell S2722QC offers good value with a 27-inch 4k screen and USB-C port. It has fewer features compared to higher-end models but includes 65W power delivery and supports Picture-by-Picture and Picture-in-Picture modes. This monitor is an excellent choice for users looking for a reliable display with decent color accuracy and multiple device compatibility.",
    },
    {
      id: 3,
      photo:
        "https://m.media-amazon.com/images/I/71aicd00vvL._AC_UF894,1000_QL80_.jpg",
      product_name: "Dell S2721QS",
      rating: 8.5,
      size: '27"',
      resolution: "3840 x 2160",
      price: 250,
      description:
        "The Dell S2721QS is a budget-friendly option with a 27-inch 4k screen, offering sharp text clarity. It lacks USB ports but provides excellent display quality, making it a great option for users focused on screen performance over additional features. The ASUS ProArt PA278CV is an alternative with USB ports but lower resolution, catering to those needing more connectivity.",
    },
    {
      id: 4,
      photo:
        "https://i.rtings.com/assets/products/xVj9N06Y/asus-vg246h/design-medium.jpg?format=auto",
      product_name: "ASUS VG246H",
      rating: 7.6,
      size: '24"',
      resolution: "1920 x 1080",
      price: 140,
      description:
        "The ASUS VG246H is a compact, entry-level monitor with a 24-inch 1080p screen, suitable for limited desk space or dual setups. It offers decent text clarity for coding despite its lower resolution. Its ergonomic stand and low blue light feature make it a comfortable choice for long hours of use, providing a good balance of performance and value.",
    },
    {
      id: 5,
      photo: "https://i.insider.com/5f36a9e4e89ebf001f044924?width=700",
      product_name: "Sony WH-1000XM4",
      rating: 8.6,
      detail_1: "9/10",
      detail_2: "9/10",
      price: 350,
      description:
        "The Sony WH-1000XM4 headphones offer a blend of superior sound quality, advanced noise-canceling technology, and thoughtful features, making them a standout choice for both audiophiles and everyday users. Their exceptional comfort, customizable sound, and smart functionalities ensure an excellent listening experience, whether for travel, work, or leisure.",
    },
    {
      id: 6,
      photo: "https://majorhifi.com/wp-content/uploads/IMG_2248.jpg",
      product_name: "Beyerdynamic DT 1990 Pro",
      rating: 9,
      detail_1: "8/10",
      detail_2: "10/10",
      price: 500,
      description:
        "The Beyerdynamic DT 1990 Pro headphones are celebrated for their precise and detailed sound profile, perfect for professional audio tasks and discerning listeners. Their sturdy build and expansive soundstage enhance the listening experience, though comfort may vary due to their firmer fit. Highly praised for their analytical sound quality and durability, they remain a top choice for studio use and audiophile enjoyment.",
    },
    {
      id: 7,
      photo:
        "https://www.cnet.com/a/img/resize/2a23b9f88e2cbb42225b8a3581aa2db4e1244dc2/hub/2021/06/07/c1c14718-365b-4634-ad70-019bfeb58f07/sony-wf-1000xm4-1.jpg?auto=webp&fit=crop&height=362&width=644",
      product_name: "Sony WF-1000XM4",
      rating: 9,
      detail_1: "8/10",
      detail_2: "9/10",
      price: 200,
      description:
        "Offering outstanding sound quality, effective noise cancellation, and a comfortable fit in a compact design, these earbuds deliver a premium listening experience. With support for high-resolution audio and customizable settings via the Sony Headphones Connect app, they cater to both music enthusiasts and everyday users alike.",
    },
    {
      id: 8,
      photo:
        "https://imageio.forbes.com/specials-images/imageserve/64ac88339b11f18b95edfb01/0x0.jpg?format=jpg&crop=1600,900,x0,y0,safe&height=900&width=1600&fit=bounds",
      product_name: "Bose QuietComfort 45 headphones",
      rating: 9,
      detail_1: "9/10",
      detail_2: "8/10",
      price: 250,
      description:
        "The Bose QuietComfort 45 headphones provide programmers with excellent comfort and balanced sound quality. Their plush ear cushions and lightweight build ensure comfort during long coding sessions, while effective noise cancellation helps maintain focus. They offer clear vocals and good bass, making them a practical choice for enhancing productivity and enjoying music while working.",
    },
    {
      id: 9,
      photo:
        "https://m.media-amazon.com/images/S/aplus-media/vc/048c25a3-5e39-451c-a10e-0d3b600b8bb2.__CR0,0,600,450_PT0_SX600_V1___.jpg",
      product_name: "Jabra Elite 85h",
      rating: 9,
      detail_1: "9/10",
      detail_2: "8/10",
      price: 250,
      description:
        "The Jabra Elite 85h headphones offer a blend of comfort, sound quality, and smart features, making them a versatile choice for various users, including programmers. They feature active noise cancellation (ANC) that adapts to your surroundings, ensuring a distraction-free environment. The sound profile is balanced with clear vocals and punchy bass, suitable for both work and leisure activities.",
    },
    {
      id: 10,
      photo:
        "https://cdn.shopify.com/s/files/1/0059/0630/1017/files/Q5-Max-1.jpg?v=1703736781",
      product_name: "Keychron Q5 Max",
      rating: 8.1,
      size: "Size: 96%",
      switchType: "Switch Type: Mechanical",
      price: 230,
      description:
        "The Keychron Q5 Max is a wireless mechanical keyboard with outstanding build quality and aesthetics. Its double gasket-mounted design provides a soft, springy typing experience, making it stand out among prebuilt options. With a hot-swappable PCB, changing switches is straightforward, and you can also replace keycaps and stabilizers. Ideal for programmers.",
    },
    {
      id: 11,
      photo:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/wm/2023/10/nuphy-air75-v2-on-desk-top-down-view-esc-key.jpg",
      product_name: "NuPhy Air75 V2",
      rating: 7.8,
      size: "Size: 75%",
      switchType: "Switch Type: Mechanical",
      price: 140,
      description:
        "The NuPhy Air75 V2 is a versatile wireless mechanical keyboard that excels in both performance and portability. It features low-profile switches and chiclet-style keycaps, providing a comfortable typing experience. VIA software support allows extensive customization of key assignments and backlighting. With durable PBT keycaps and impressive battery life, it's perfect for long work sessions.",
    },
    {
      id: 12,
      photo:
        "https://cdn.shopify.com/s/files/1/0059/0630/1017/files/Keychron-V5-Max-QMK-VIA-wireless-mechanical-keyboard-5.jpg?v=1703056517",
      product_name: "Keychron V5 Max",
      rating: 7.9,
      size: "Size: 96%",
      switchType: "Switch Type: Mechanical",
      price: 99,
      description:
        "The Keychron V5 Max is a budget-friendly mechanical keyboard offering great customizability. Despite its lower price, it includes features like a sturdy plastic frame, PBT keycaps, and sound-dampening foam. With a hot-swappable PCB and full firmware customization, it’s perfect for users new to customizable keyboards who want a reliable option for programming.",
    },
    {
      id: 13,
      photo:
        "https://cdn.shopify.com/s/files/1/0510/7866/0274/files/60_percent_keyboard_5.jpg?v=1652952279",
      product_name: "ROYAL KLUDGE RK61",
      rating: 7.3,
      size: "Size: 60%",
      switchType: "Switch Type: Mechanical",
      price: 50,
      description:
        "The ROYAL KLUDGE RK61 is a compact, affordable wireless keyboard that suits limited desk space. Its 60% layout lacks a dedicated function row, but it offers a hot-swappable PCB for easy switch replacement. Connecting to up to three devices via Bluetooth, it’s perfect for those who need flexibility. A USB cable allows usage while charging, making it a practical choice.",
    },
    {
      id: 14,
      photo:
        "https://images.ctfassets.net/xa93kvziwaye/cew66CMgrtsZXCbq7QetM/d275276cdc05fa4b7e4014c1d64b5049/hero-image_does-the-logitech-mx-keys-s-keyboard-make-typing-life-easier.jpg?fm=webp&f=top&fit=fill&w=1124&h=506",
      product_name: "Logitech MX Keys S",
      rating: 8.1,
      size: "Size: 100%",
      switchType: "Switch Type: Scissor",
      price: 110,
      description:
        "The Logitech MX Keys S is a top choice for those who prefer a non-mechanical, quiet typing experience. Its full-sized layout, with dish-shaped keycaps, helps reduce typos, and it connects wirelessly to up to three devices. With smart backlighting that adjusts to ambient light, it’s ideal for both work and casual use, providing a smooth, laptop-like feel.",
    },
  ],
};

module.exports = allProducts;
