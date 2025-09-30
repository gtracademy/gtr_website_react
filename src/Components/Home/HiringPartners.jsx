import React from 'react';

const HiringPartners = () => {
  // Logos from reliable online sources
  const partnerLogos = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQeDFaHUOlURA319OOvInmskT_Tq2Wo2FsQ&s', // PwC logo
    'https://1000logos.net/wp-content/uploads/2017/06/Sony-Logo.jpg', // Sony logo
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63iW-drx9mgYHjGG6LpPRka6417HbE2sFVg&s', // Wipro logo
    'https://i.namu.wiki/i/1rd6cehhMh0I8i5hlZ_3O3Ptlj41F9Opq_SDuJ_Qclv0wzZCxZkjx1x_JxS59WM2eGbsbAinUVHnMXJ2leL4Zg.webp', // Infosys logo
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maersk_Group_Logo.svg/1280px-Maersk_Group_Logo.svg.png', // Maersk logo
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1075px-IBM_logo.svg.png', // IBM logo
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HP_logo_2025.svg/1200px-HP_logo_2025.svg.png', // HP logo
    'https://upload.wikimedia.org/wikipedia/commons/8/8a/HCL_Technologies_logo.svg', // HCL logo
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/1024px-EY_logo_2019.svg.png', // EY logo
    'https://img.hcinnovationgroup.com/files/base/ebm/hci/image/2016/05/kpmg.png?auto=format,compress&fit=max&q=45&w=640&width=640', // KPMG logo
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_201x_logo.svg/1024px-Capgemini_201x_logo.svg.png', // Capgemini logo
    'https://lobbymap.org/site//data/001/362/1362013.png', // Aramco logo
    'https://upload.wikimedia.org/wikipedia/commons/1/1c/Accenture_logo.svg', // Accenture logo
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/1200px-ABB_logo.svg.png', // ABB logo
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/DXC_Technology_logo_%282021%29.svg/800px-DXC_Technology_logo_%282021%29.svg.png', // DXC logo
  ];

  return (
    <div className="relative bg-white pt-12 px-4 sm:px-6 lg:px-8 pb-16">
      <div className="w-full">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-[#C81D25] text-2xl font-semibold">Associated with</h3>
            <h2 className="text-4xl font-bold font-serif text-[#0B3954]">1200+ Hiring partners</h2>
          </div>
         
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center h-16 w-full px-2">
              <img
                src={logo}
                alt={`Hiring Partner ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* This div is now outside the max-w-7xl container */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 shadow-b-xl"></div>
    </div>
  );
};

export default HiringPartners;