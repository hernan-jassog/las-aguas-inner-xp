import React from 'react';

const LinkTreePage = () => {
  const links = [
    {
      title: '🤖 Habla con Inner Bot (WhatsApp)',
      url: 'https://wa.me/573222452274', 
      bgColor: 'bg-[#25D366]', 
      textColor: 'text-white',
    },
    {
      title: '🧘‍♂️ Visitar Nuestra Página Web',
      url: '/', 
      bgColor: 'bg-gradient-to-r from-cyan-400 to-blue-500', 
      textColor: 'text-white',
    },
    {
      title: '🛏️ Reservar en nuestro Portal',
      url: 'https://engine.lobbypms.com/las-aguas-inner-experience', 
      bgColor: 'bg-gradient-to-r from-orange-400 to-rose-500', 
      textColor: 'text-white',
    },
    {
      title: '📸 Síguenos en Instagram',
      url: 'https://instagram.com/lasaguasinnerexperience',
      bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500', 
      textColor: 'text-white',
    },
    {
      title: '📘 Síguenos en Facebook',
      url: 'https://www.facebook.com/people/Las-Aguas-Studios/100088014711472/', 
      bgColor: 'bg-[#1877F2]', 
      textColor: 'text-white',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Perfil */}
      <div className="flex flex-col items-center mb-10 mt-4">
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-700 shadow-xl mb-4 transition-transform hover:scale-105">
          <img 
            src="images/logo.png" 
            alt="Las Aguas Inner Experience" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight text-center">Las Aguas Inner Experience</h1>
        <p className="text-gray-400 mt-2 text-center font-medium">Hostel • Inner Experience • Coworking • Wellness</p>
      </div>

      {/* Botones de Enlaces */}
      <div className="w-full max-w-md space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className={`block w-full text-center py-4 px-6 rounded-2xl shadow-xl font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/10 ${link.bgColor} ${link.textColor} border-none`}
          >
            {link.title}
          </a>
        ))}
      </div>

      {/* Footer del Linktree */}
      <div className="mt-16 text-center text-sm font-medium text-gray-500 tracking-widest uppercase">
        <p>📍 La Candelaria, Bogotá</p>
      </div>
    </div>
  );
};

export default LinkTreePage;