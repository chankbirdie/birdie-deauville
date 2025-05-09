import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Bienvenue au Birdie : Votre Appartement de Charme à Deauville avec Vue sur le Golf</h1>
        <p className="text-xl text-gray-700">Un Séjour Inoubliable entre Calme, Confort et Découvertes à Deauville</p>
      </header>

      <section className="mb-12">
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          Découvrez "Le Birdie", un appartement de vacances exceptionnel de 43 m² niché au cœur de Deauville, la perle de la Côte Fleurie. 
          Situé au deuxième et dernier étage d’une résidence paisible et verdoyante, cet appartement vous promet des vacances mémorables, 
          alliant la sérénité d’un parc arboré avec une vue imprenable sur le prestigieux golf de Deauville. 
          Loin de l’agitation, mais à proximité de toutes les attractions, "Le Birdie" est le choix idéal pour votre location saisonnière à Deauville.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/IMG_6440_airbnb.jpg" alt="Façade de la résidence Le Birdie à Deauville" layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/Vue piscine_opt.jpg" alt="Piscine de la résidence à Deauville" layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/Vue drapeaux_opt.jpg" alt="Plage de Deauville avec parasols" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>

      <section className="mb-12 bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Votre Cocon Douillet à Deauville : Description de l’Appartement</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Notre appartement, soigneusement décoré et parfaitement équipé, peut accueillir confortablement jusqu’à cinq personnes. 
          Chaque espace a été pensé pour votre bien-être et votre confort, afin que vous vous sentiez immédiatement chez vous.
        </p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-3">Chambres Spacieuses et Confortables</h3>
          <p className="text-gray-700 mb-2">L’appartement dispose de deux chambres accueillantes :</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
            <li><strong>Chambre Principale :</strong> Un lit double confortable vous attend, avec des espaces de rangement pratiques pour vos affaires personnelles. Réveillez-vous en douceur avec la lumière naturelle et la promesse d’une belle journée à Deauville.</li>
            <li><strong>Seconde Chambre :</strong> Parfaite pour un enfant ou un adulte, cette chambre est équipée d’un lit simple, offrant un espace intime et reposant.</li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="relative h-56 w-full rounded-lg overflow-hidden shadow">
              <Image src="/images/IMG_3284.PNG" alt="Chambre principale avec lit double" layout="fill" objectFit="cover" />
            </div>
            <div className="relative h-56 w-full rounded-lg overflow-hidden shadow">
              <Image src="/images/IMG_6445.jpg" alt="Seconde chambre avec lit simple" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-3">Sanitaires Modernes pour votre Confort</h3>
          <p className="text-gray-700 mb-2">Pour votre commodité, l’appartement comprend :</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
            <li><strong>Une Salle d’Eau :</strong> Fonctionnelle, elle est équipée d’une douche et de WC.</li>
            <li><strong>Une Salle de Bains :</strong> Détendez-vous après une journée d’exploration ou une partie de golf dans la baignoire. Un véritable atout pour des moments de relaxation.</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/IMG_3280.PNG" alt="Salle à manger de l'appartement Le Birdie" layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/IMG_3282.PNG" alt="Cuisine équipée de l'appartement Le Birdie" layout="fill" objectFit="cover" />
          </div>
           <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/IMG_6443.jpg" alt="Couloir de l'appartement Le Birdie" layout="fill" objectFit="cover" />
          </div>
           <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/Vue piscine 2_opt.jpg" alt="Vue de la piscine de la résidence" layout="fill" objectFit="cover" />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-3">Un Séjour Lumineux et Convivial</h3>
          <p className="text-gray-700 mb-2">Le cœur de l’appartement est son séjour spacieux et lumineux. Il est aménagé avec :</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
            <li><strong>Deux Canapés Confortables :</strong> Dont un canapé convertible de qualité, offrant un couchage supplémentaire pour deux personnes. C’est l’endroit idéal pour se retrouver, lire un livre ou simplement se détendre.</li>
            <li><strong>Télévision :</strong> Pour vos moments de divertissement en soirée ou les jours de pluie.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-3">Cuisine Ouverte et Entièrement Équipée</h3>
          <p className="text-gray-700 mb-2">Préparez de délicieux repas comme à la maison grâce à notre cuisine ouverte et moderne. Elle comprend tout le nécessaire :</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
            <li>Plaques de cuisson</li>
            <li>Réfrigérateur</li>
            <li>Four / Micro-ondes combiné</li>
            <li>Cafetière (pour bien commencer la journée !)</li>
            <li>Vaisselle complète et ustensiles de cuisine</li>
            <li>Lave-linge</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-3">Balcon Privatif avec Vue Panoramique</h3>
          <p className="text-gray-700 leading-relaxed">
            Profitez de moments privilégiés sur le balcon aménagé. Avec sa table et ses chaises, c’est l’endroit rêvé pour prendre votre petit-déjeuner en admirant la vue sur le parc arboré et le golf, ou pour savourer un apéritif en fin de journée, bercé par la quiétude des lieux.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Équipements et Services Inclus pour un Séjour Serein</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 pl-4">
          <li><strong>Wi-Fi Fibre Gratuit :</strong> Restez connecté et partagez vos meilleurs moments.</li>
          <li><strong>Draps et Serviettes Fournis :</strong> Voyagez léger, nous nous occupons du linge de maison.</li>
          <li><strong>Piscine dans la résidence :</strong> Profitez d’un accès à la piscine de la résidence pour vous rafraîchir et vous amuser.</li>
        </ul>
      </section>

      <section className="mb-12 bg-blue-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Explorez Deauville : Une Ville d’Élégance et de Loisirs</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          "Le Birdie" bénéficie d’un emplacement stratégique, vous permettant d’accéder facilement aux trésors de Deauville et de ses environs :
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 text-lg">
          <li><strong>La Plage de Deauville et ses Célèbres Planches (à 2,2 km) :</strong> Étendez votre serviette sur le sable fin, admirez les parasols colorés et flânez sur la promenade mythique.</li>
          <li><strong>L’Hippodrome de Deauville-La Touques :</strong> Vivez l’émotion des courses hippiques à quelques pas.</li>
          <li><strong>Le Centre-Ville Animé :</strong> Boutiques de luxe, marché typique, restaurants gastronomiques et magnifiques villas normandes.</li>
          <li><strong>Les Franciscaines :</strong> Centre culturel avec expositions, spectacles, médiathèque et événements.</li>
          <li><strong>Le Golf de Deauville :</strong> Parcours exceptionnels dans un cadre magnifique à votre porte.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Pourquoi Choisir "Le Birdie" pour votre Location Saisonnière à Deauville ?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 pl-4">
          <li><strong>Emplacement Idéal :</strong> Au calme, vue superbe, proche des attractions.</li>
          <li><strong>Confort et Équipements :</strong> Appartement pensé pour votre bien-être.</li>
          <li><strong>Capacité d’Accueil :</strong> Idéal pour familles, couples, amis (jusqu’à 5 personnes).</li>
          <li><strong>Tranquillité Assurée :</strong> Pas d’exposition directe à la piscine, calme garanti.</li>
          <li><strong>Charme Normand :</strong> Douceur de vivre normande authentique.</li>
        </ul>
      </section>

      <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-6">Réservez Votre Séjour de Rêve à Deauville !</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          N’attendez plus pour planifier vos vacances à Deauville ! "Le Birdie" est prêt à vous accueillir pour une expérience inoubliable. 
          Pour connaître les disponibilités, les tarifs ou pour toute autre question, n’hésitez pas à nous contacter directement.
        </p>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Contactez-nous</h3>
          <p className="text-lg mb-2">Pour toute demande de réservation ou d'information, veuillez nous envoyer un email à :</p>
          <a href="mailto:contact@example.com" className="text-xl font-bold text-blue-600 hover:underline">contact@example.com</a>
          <p className="text-sm mt-4 text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
        </div>
        <p className="mt-8 text-sm">Numéro d’enregistrement : 14220001706EC</p>
        <p className="mt-4 text-lg font-semibold">Posez vos valises au "Birdie" et laissez-vous séduire par le charme de Deauville. Nous avons hâte de vous accueillir !</p>
      </section>

      <footer className="text-center mt-12 py-6 border-t">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Le Birdie Deauville. Tous droits réservés.</p>
      </footer>
    </main>
  );
}

