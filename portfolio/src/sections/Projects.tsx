import ProjectCard from '../components/ProjectCard'
import {
  FaBootstrap,
  FaChrome,
  FaReact,
  FaWordpress,
  FaYoast,
} from 'react-icons/fa'
import { DiCss3, DiHtml5, DiSass } from 'react-icons/di'
import { RiJavascriptFill, RiNodejsFill } from 'react-icons/ri'
import {
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiJest,
  SiLighthouse,
  SiReactrouter,
  SiSwagger,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'
import { BiLogoMongodb, BiLogoRedux, BiLogoTypescript } from 'react-icons/bi'
import { FiFigma } from 'react-icons/fi'

import Kasa from '../assets/images/projects/Kasa.webp'
import ArgentBank from '../assets/images/projects/ArgentBank.webp'
import Events from '../assets/images/projects/724Events.webp'
import NinaCarducci from '../assets/images/projects/NinaCarducci.webp'
import SophieBluel from '../assets/images/projects/SophieBluel.webp'
import PrintIt from '../assets/images/projects/PrintIt.webp'
import Ohmyfood from '../assets/images/projects/Ohmyfood.webp'
import Booki from '../assets/images/projects/Booki.webp'
import Portfolio from '../assets/images/projects/Portfolio.webp'
import Vetipole from '../assets/images/projects/Vetipole.webp'
import Ethereal from '../assets/images/projects/Ethereal.webp'
import Extellient from '../assets/images/projects/Extellient.webp'
import Dock from '../assets/images/projects/Dock.webp'

const Projects = () => {
  return (
    <section
      className='border-b-4 border-black dark:border-dark-black dark:bg-dark-bg py-[100px] md:py-[200px] scroll-mt-header px-1 sm:px-4 2xl:px-[10%]'
      id='projects'
    >
      <h2 className='text-center mb-20 text-4xl font-heading px-4 dark:text-white'>
        Et en pratique, ça donne quoi ?
      </h2>
      <h3 className='text-center text-2xl font-heading mt-5 px-4 dark:text-white'>
        Du site WordPress...
      </h3>
      <div className='w-full flex flex-wrap justify-center items-center gap-10 my-20'>
        <ProjectCard
          projectCover={Vetipole}
          projectTitle='Vétipôle'
          projectDescription='Site internet de la clinique vétérinaire Vétipôle'
          projectLanguages={[
            FaWordpress,
            FaYoast,
            SiGoogleanalytics,
            SiGooglesearchconsole,
          ]}
          projectWebsiteURL='https://www.vetipole.vet/'
          projectContext={
            <p className='text-md font-body'>
              En mars 2023, une nouvelle clinique vétérinaire a ouvert ses
              portes à Saint-Jeoire-Prieuré, en Savoie. Pour cette occasion,
              j'ai été chargé de collaborer avec{' '}
              <a
                href='https://claireorvain.fr/'
                target='_blank'
                className='text-mainAccent font-bold'
              >
                Claire Orvain
              </a>{' '}
              pour créer le site internet de la clinique, de la conception
              artistique, à l'intégration en utilisant WordPress, à la mise en
              place du référencement et SEO.
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>Intégration des pages avec WordPress.</li>
                <li>Optimisation des performances du site.</li>
                <li>Optimisation de l'affichage responsive.</li>
                <li>Traduction des pages en anglais et en allemand.</li>
                <li>Mise en place du référencement et SEO.</li>
                <li>Optimisation des méta-données des pages.</li>
                <li>Indexation des pages pour les moteurs de recherche.</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={Ethereal}
          projectTitle='Ethereal Decibel Company'
          projectDescription="Site internet de l'association Ethereal Decibel Company"
          projectLanguages={[FaWordpress, FaYoast, FiFigma]}
          projectWebsiteURL='https://etherealdecibel.com/'
          projectContext={
            <p className='text-md font-body'>
              L'association bretonne Ethereal Decibel Company (EDC), qui
              organise et produit depuis plus de 10 ans des événements centrés
              autour des musiques actuelles et psychédéliques, ressentait le
              besoin de refaire entièrement son site internet en raison de la
              multiplication des événements et d'une notoriété sans cesse
              grandissante.
              <br />
              L'association organise chaque été l'un des plus grands festivals
              de musique psychédélique en France et avait besoin d'une vitrine
              optimisée pour permettre aux festivaliers d'accéder à l'achat de
              billets, aux informations sur le festival, et à la programmation,
              avec une mise à jour du contenu à chaque nouvelle édition.
              <br />
              Collaborant avec{' '}
              <a
                href='https://claireorvain.fr/'
                target='_blank'
                className='text-mainAccent font-bold'
              >
                Claire Orvain
              </a>
              , nous avons imaginé ensemble le design, la structure,
              l'arborescence et l'ensemble des pages du site.
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>Création d'une charte graphique pour le site.</li>
                <li>Création de wireframes et maquettes.</li>
                <li>Création de l'arborescence du site.</li>
                <li>Création de templates pour la mise en page.</li>
                <li>
                  Intégration des pages avec WordPress et le thème Salient.
                </li>
                <li>Rédaction du contenu.</li>
                <li>Traduction du site pour proposer une version anglaise.</li>
                <li>
                  Optimisation de l'affichage responsive sur tous types
                  d'écrans.
                </li>
                <li>Mise en place du référencement naturel et du SEO.</li>
                <li>Maintenance du site.</li>
                <li>Mise à jour régulière du contenu.</li>
                <li>
                  Création des fiches artistes et mise à jour de la
                  programmation du festival chaque année.
                </li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={Extellient}
          projectTitle='Extellient'
          projectDescription="Refonte du site internet de l'agence grenobloise Extellient. Intégration et référencement SEO"
          projectLanguages={[FaWordpress, FaYoast, FiFigma]}
          projectWebsiteURL='https://www.extellient.com/'
          projectContext={
            <p className='text-md font-body'>
              L'agence grenobloise Extellient souhaitait effectuer une refonte
              complète de son site internet pour s'harmoniser avec sa nouvelle
              identité graphique, mettre à jour ses contenus et ainsi gagner en
              attractivité, tant pour de potentiels clients que pour de futurs
              collaborateurs.
              <br />
              Dans ce cadre, Extellient m'a missionné en tant que stagiaire pour
              participer à cette refonte. J'ai travaillé en étroite
              collaboration avec l'UX/UI Designer et la Chargée de communication
              pour mener à bien cette mission.
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>Réalisation de wireframes et de maquettes.</li>
                <li>Rédaction de contenus textuels.</li>
                <li>Intégration des pages avec WordPress.</li>
                <li>
                  Optimisation de l'affichage responsive du site sur tous types
                  d'écrans.
                </li>
                <li>Mise en place du référencement naturel et SEO.</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={Dock}
          projectTitle='Dock 14'
          projectDescription='Mise en place du référencement et SEO pour le site du Dock 14, Laser Game à Échirolles'
          projectLanguages={[FaWordpress, FaYoast, SiGooglesearchconsole]}
          projectWebsiteURL='https://dock14.fr/'
          projectContext={
            <p className='text-md font-body'>
              À l'occasion de l'ouverture d'un nouveau Laser Game à Échirolles,
              dans la banlieue de Grenoble, et de la création d'un site web
              dédié, j'ai été missionné pour mettre en œuvre et gérer le
              référencement naturel, ainsi que pour optimiser les pages du site
              afin d'améliorer leur indexation par les moteurs de recherche.
              <br />
              L'objectif était d'augmenter la visibilité du site du Dock 14 dans
              les résultats de recherche et de le positionner favorablement dans
              l'univers concurrentiel et compétitif des Laser Games de
              l'agglomération grenobloise.
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>Etude comparative de la concurrence.</li>
                <li>Recherche de mots-clés et keywords.</li>
                <li>Mise en place du référencement naturel.</li>
                <li>Optimisation des méta-données.</li>
                <li>Optimisation du SEO local.</li>
                <li>
                  Optimisation de l'indexation des pages par les moteurs de
                  recherche.
                </li>
                <li>Maîtrise du plugin Yoast pour WordPress.</li>
              </ul>
            </div>
          }
        />
      </div>
      <h3 className='text-center text-2xl font-heading mt-40 px-4 dark:text-white'>
        ...au site développé de toutes pièces
      </h3>
      <div className='w-full flex flex-wrap justify-center gap-10 mt-20'>
        <ProjectCard
          projectCover={Portfolio}
          projectTitle='Portfolio'
          projectDescription='Projet de création et mise en ligne de mon portfolio personnel'
          projectLanguages={[FaReact, BiLogoTypescript, SiTailwindcss, FiFigma]}
          projectGithubURL='https://github.com/NicolasOsborne/portfolio'
          projectWebsiteURL='https://nicoo-portfolio.vercel.app/'
          projectContext={
            <p className='text-md font-body'>
              À l'issue de ma formation avec OpenClassrooms, il était temps de
              créer mon propre portfolio pour présenter qui je suis, ce que je
              sais faire et les différents projets que j'ai déjà réalisés !
              <br />
              J'ai immédiatement souhaité concevoir un design original avec une
              inspiration néo-brutaliste. Après avoir rassemblé toutes mes idées
              et créé les maquettes de mon futur site, je me suis lancé dans le
              code !<br />
              J'ai choisi de créer tout le site en utilisant React pour
              approfondir ma maîtrise de cet outil et appliquer ce que j'ai
              appris tout au long de ma formation.
              <br />
              J'ai également décidé d'utiliser TypeScript pour renforcer mes
              compétences dans ce langage. Toujours animé par l'envie
              d'apprendre de nouvelles choses, j'ai opté pour le framework
              Tailwind CSS, une première pour moi, qui s'est avéré être un
              véritable coup de cœur !<br />
              Voilà, mon tout premier site a été réalisé intégralement par
              moi-même, du design au code, jusqu'à l'hébergement. Et si vous
              lisez ces lignes, c'est que vous l'avez déjà parcouru !
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>Veille créative.</li>
                <li>Création de wireframes pour définir le layout.</li>
                <li>
                  Création d'une charte graphique (couleurs, typos, logo,
                  visuels).
                </li>
                <li>Rédaction des contenus textuels.</li>
                <li>Création de maquettes avec Figma.</li>
                <li>Choix des technologies, langages et frameworks.</li>
                <li>
                  Découpage du projet en composants React réutilisables et
                  dynamiques.
                </li>
                <li>Configuration du thème Tailwind.</li>
                <li>Codage de l'intégralité du site.</li>
                <li>Optimisation du comportement responsive.</li>
                <li>Optimisation du référencement et des méta-données.</li>
                <li>Réservation du nom de domaine.</li>
                <li>Hébergement et mise en ligne.</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={ArgentBank}
          projectTitle='Argent Bank'
          projectDescription="Développement Front-End d'une application bancaire avec React et Redux reliée au Back-End via une API"
          projectLanguages={[
            FaReact,
            BiLogoRedux,
            BiLogoTypescript,
            DiSass,
            SiSwagger,
            RiNodejsFill,
            BiLogoMongodb,
          ]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-11'
          projectWebsiteURL=''
          projectContext={
            <p className='text-md font-body'>
              <b>Projet n°11 de la formation OpenClassrooms.</b>
              <br />
              L'objectif de ce projet était de développer une application web
              bancaire avec React, comprenant une landing page, un dashboard
              utilisateur accessible aux utilisateurs connectés, et une
              fonctionnalité de mise à jour des informations utilisateur.
              <br />
              L'utilisation de Redux-Toolkit m'a permis de comprendre et de
              maîtriser le partage et la mise à jour du state global de
              l'application entre tous les composants.
              <br />
              La base de données des utilisateurs était créée à l'aide de
              MongoDB, et le code était exécuté à l'aide de NodeJS côté serveur.
              <br />
              Pour pousser plus loin mon apprentissage, et profiter de ce projet
              pour apprendre un nouveau langage, j'ai fait le choix personnel
              d'utiliser TypeScript.
              <br />
              La documentation de l'API REST a été réalisée avec Swagger, à
              laquelle j'ai modélisé la configuration des nouvelles routes
              nécessaires à la communication entre l'interface et le serveur.
              <br />
              Un projet complet, permettant une première expérience de gestion
              d'une application Full-Stack.
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>Installation du back-end avec NodeJS et MongoDB.</li>
                <li>Initialisation du projet React.</li>
                <li>Création du routage avec React Router.</li>
                <li>
                  Transformation des pages statiques HTML/CSS en application
                  React dynamique.
                </li>
                <li>Conversion du CSS en SASS.</li>
                <li>Gestion du state global avec Redux-Toolkit.</li>
                <li>Mise en place des appels API.</li>
                <li>
                  Implémentation de la fonctionnalité de connexion utilisateur.
                </li>
                <li>Affichage des données utilisateur dans l'interface.</li>
                <li>
                  Implémentation de la fonctionnalité de modification des
                  informations de l'utilisateur.
                </li>
                <li>Mise à jour de la base de données et de l'interface.</li>
                <li>Modélisation des nouvelles routes API.</li>
                <li>Documentation Swagger des nouvelles routes.</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={Events}
          projectTitle='724 Events'
          projectDescription="Débuggage et développement du site vitrine one-page d'une agence d'événementiel"
          projectLanguages={[
            FaReact,
            RiJavascriptFill,
            DiSass,
            SiJest,
            FaChrome,
          ]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-10'
          projectWebsiteURL='https://oc-projet-10-724events.vercel.app/'
          projectContext={
            <p className='text-md font-body'>
              <b>Projet n°10 de la formation OpenClassrooms.</b>
              <br />
              L'objectif de ce projet était de partir d'un site codé avec React
              par un autre développeur, d'identifier les différents bugs
              présents dans le code, de les corriger, puis de finaliser le
              développement du site.
              <br />
              Ensuite, j'ai écris de nouveaux tests d'intégration et tests
              unitaires pour tester l'ensemble du code en utilisant Jest.
              <br />
              La dernière étape du projet consistait à rédiger un cahier de
              recettes complet, listant tous les scénarios de tests utilisateur
              à réaliser pour vérifier que toutes les fonctionnalités du site
              soient bien opérationnelles, telles que décrites par le client.
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>Analyse d'un code existant.</li>
                <li>Repérage de bugs.</li>
                <li>
                  Identification des bugs à l'aide de React DevTools et Chrome
                  DevTools.
                </li>
                <li>
                  Correction des bugs et des erreurs de logique JavaScript.
                </li>
                <li>
                  Correction de toutes les erreurs listées dans la console.
                </li>
                <li>Écriture de tests unitaires et d'intégration avec Jest.</li>
                <li>Optimisation de la couverture des tests.</li>
                <li>Rédaction de tests utilisateur.</li>
                <li>Initiation au Test Driven Development (TDD).</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={NinaCarducci}
          projectTitle='Nina Carducci'
          projectDescription="Optimisation du référencement, des performances et de l'accessibilité du site web d'une phtotographe"
          projectLanguages={[
            DiCss3,
            DiHtml5,
            RiJavascriptFill,
            FaBootstrap,
            SiLighthouse,
          ]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-9'
          projectWebsiteURL='https://nicolasosborne.github.io/oc-projet-9/'
          projectContext={
            <p className='text-md font-body'>
              <b>Projet n°9 de la formation OpenClassrooms.</b>
              <br />
              L'objectif de ce projet était de répondre aux besoins d'une
              photographe qui souhaitait optimiser son site web pour que
              celui-ci soit mieux référencé, notamment localement.
              <br />
              Après une analyse approfondie du site existant à l'aide des outils
              Lighthouse et Wave, j'ai pu mettre en évidence un certain nombre
              d'améliorations à apporter pour optimiser les performances
              générales et l'accessibilité du site pour tous les utilisateurs et
              supports.
              <br />
              Enfin, la dernière étape de ce projet était de produire un rapport
              d'audit à destination de la cliente, pour présenter les
              performances du site avant et après les modifications.
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>Analyse des performances avec Lighthouse.</li>
                <li>Analyse de l'accessibilité avec Wave.</li>
                <li>Analyse du code existant.</li>
                <li>
                  Optimisation des images (conversion, redimensionnement,
                  compression).
                </li>
                <li>
                  Optimisation de la durée d'exécution des scripts et fichiers
                  de styles.
                </li>
                <li>Minimisation, compression et nettoyage du code.</li>
                <li>Correction de la sémantique.</li>
                <li>Correction des contrastes.</li>
                <li>
                  Optimisation de l'accessibilité pour répondre aux critères du
                  WCAG (Web Content Accessibility Guidelines).
                </li>
                <li>
                  Ajout des méta-données pour le référencement et l'indexation
                  par les moteurs de recherche.
                </li>
                <li>Ajout des Rich Snippets pour le référencement local.</li>
                <li>Rédaction du rapport d'optimisation et d'audit.</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={Kasa}
          projectTitle='Kasa'
          projectDescription="Développement Front-End d'une application web de location immobilière avec React"
          projectLanguages={[
            FaReact,
            SiReactrouter,
            RiJavascriptFill,
            SiVite,
            DiSass,
          ]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-8'
          projectWebsiteURL='https://oc-projet-8-kasa.vercel.app/'
          projectContext={
            <p className='text-md font-body'>
              <b>Projet n°8 de la formation OpenClassrooms.</b>
              <br />
              L'objectif de ce projet était de maîtriser la création d'une
              interface utilisateur avec React, en assimilant la logique de
              fonctionnement des composants, ainsi que la configuration de la
              navigation avec React Router.
              <br />
              Ce projet m'a également permis de découvrir et d'utiliser Vite
              pour l'initialisation et la compilation de l'application.
              <br />
              Ce projet, axé sur le Front-End, utilisait des données importées
              depuis un fichier JSON.
              <br />
              L'implémentation du projet s'est faite à partir de maquettes et de
              prototypes Figma présentant les différentes pages, composants et
              animations à développer.
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>Initialisation du projet avec Vite.</li>
                <li>Création du routage de l'application avec React Router.</li>
                <li>
                  Découpage de l'application en composants modulaires et
                  réutilsables.
                </li>
                <li>Création des différentes pages.</li>
                <li>Gestion du state et des événements dans les composants.</li>
                <li>Création d'un carrousel d'images.</li>
                <li>Création d'animations.</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={SophieBluel}
          projectTitle='Sophie Bluel'
          projectDescription="Création d'une page web dynamique pour une architecte d'intérieur avec JavaScript et une API"
          projectLanguages={[RiJavascriptFill, RiNodejsFill, SiSwagger]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-6/'
          projectWebsiteURL=''
          projectContext={
            <p className='text-md font-body'>
              <b>Projet n°6 de la formation OpenClassrooms.</b>
              <br />
              L'objectif de ce projet était de créer un portfolio pour Sophie
              Bluel, une architecte d'intérieur.
              <br />
              La page web devait présenter ses réalisations, avec une
              fonctionnalité de filtrage par catégorie.
              <br />
              L'architecte devait pouvoir se connecter à son compte pour accéder
              à une version éditable de son portfolio, lui permettant d'ajouter
              ou de supprimer des projets via une modale.
              <br />
              Ce projet m'a permis de comprendre l'installation d'un back-end,
              l'utilisation d'une API REST, la gestion des appels API pour les
              opérations CRUD, l'authentification utilisateur via un système de
              token, et la manipulation du DOM avec JavaScript pour créer des
              pages dynamiques.
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>
                  Installation et lancement des dépendances du back-end avec
                  NodeJS.
                </li>
                <li>
                  Utilisation et compréhension de l'API REST et de la
                  documentation Swagger.
                </li>
                <li>Récupération de données via des appels API.</li>
                <li>
                  Ajout dynamique des données dans le DOM avec JavaScript.
                </li>
                <li>Création d'une fonctionnalité de filtrage des données.</li>
                <li>Création d'un formulaire de connexion.</li>
                <li>
                  Gestion de la connexion utilisateur via l'API et gestion des
                  erreurs.
                </li>
                <li>Stockage du token d'authentification.</li>
                <li>
                  Création d'une modale pour l'ajout et la suppression de
                  données.
                </li>
                <li>
                  Mise à jour du DOM en fonction des opérations effectuées via
                  l'API.
                </li>
                <li>Gestion de la fonctionnalité de déconnexion.</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={PrintIt}
          projectTitle='Print It'
          projectDescription="Dynamisation du site internet statique d'une imprimerie."
          projectLanguages={[RiJavascriptFill, DiCss3, DiHtml5]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-5'
          projectWebsiteURL='https://nicolasosborne.github.io/oc-projet-5/'
          projectContext={
            <p className='text-md font-body'>
              <b>Projet n°5 de la formation OpenClassrooms.</b>
              <br />
              L'objectif de ce projet était de dynamiser la page web de
              l'imprimerie Print It.
              <br />
              En partant d'une version statique du site en HTML et CSS, ma tâche
              consistait à créer un carrousel d'images dans la bannière du site
              en utilisant JavaScript.
              <br />
              Ce carrousel permettait de faire défiler des images de manière
              infinie en cliquant sur des flèches de défilement, avec des
              indicateurs sous forme de bullet-points pour afficher la slide en
              cours.
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>Ciblage des éléments du DOM avec JavaScript.</li>
                <li>Mise en place des Event Listeners.</li>
                <li>Modification des éléments de la page avec JavaScript.</li>
                <li>
                  Implémentation du défilement infini des images, texte et
                  bullet-points.
                </li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={Ohmyfood}
          projectTitle='Ohmyfood'
          projectDescription="Développement de l'interface d'un site mobile de restauration gastronomique à l'aide d'animations CSS"
          projectLanguages={[DiCss3, DiHtml5, DiSass]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-4'
          projectWebsiteURL='https://nicolasosborne.github.io/oc-projet-4/'
          projectContext={
            <p className='text-md font-body'>
              <b>Projet n°4 de la formation OpenClassrooms.</b>
              <br />
              L'objectif de ce projet était d'implémenter l'interface
              mobile-first du site de la start-up Ohmyfood, qui propose les
              menus des restaurants gastronomiques à proximité. Chaque
              restaurant possède sa propre page avec son menu.
              <br />
              Ma mission consistait à développer l'interface à partir des
              maquettes et prototypes Figma et à enrichir l'expérience
              utilisateur en ajoutant des animations CSS.
              <br />
              Ce projet m'a permis de maîtriser SASS, les animations CSS et le
              développement responsive en mobile-first.
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>Découpage et architecture des fichiers SASS.</li>
                <li>Création de variables et mixins.</li>
                <li>Création d'animations (keyframes, transitions).</li>
                <li>Création d'un loader.</li>
                <li>Développement en mobile-first.</li>
                <li>Gestion des media-queries pour l'affichage responsive.</li>
                <li>Versionnage du projet avec Git et Github.</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={Booki}
          projectTitle='Booki'
          projectDescription="Création de la page d'accueil d'une agence de voyage"
          projectLanguages={[DiCss3, DiHtml5]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-3'
          projectWebsiteURL='https://nicolasosborne.github.io/oc-projet-3/'
          projectContext={
            <p className='text-md font-body'>
              <b>Projet n°3 de la formation OpenClassrooms.</b>
              <br />
              L'objectif de ce projet était d'intégrer l'interface de la page
              d'accueil du site de l'agence de voyage Booki, en HTML et CSS, à
              partir de la maquette Figma.
              <br />
              Ma mission consistait à créer une page web entièrement responsive
              et pixel perfect, conforme aux versions desktop, tablette et
              mobile des maquettes.
              <br />
              Ce projet m'a permis de maîtriser la création d'une page web à
              partir d'une maquette, l'utilisation des media-queries et des
              propriétés flexbox.
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>Import des polices de caractère (Google Fonts).</li>
                <li>Import des bibliothèques d'icônes (Font Awesome).</li>
                <li>Découpage de la maquette pour l'intégration.</li>
                <li>Intégration et mise en page avec flexbox.</li>
                <li>
                  Mise en place de l'affichage responsive avec les
                  media-queries.
                </li>
                <li>Validation du code au W3C.</li>
              </ul>
            </div>
          }
        />
      </div>
    </section>
  )
}

export default Projects
