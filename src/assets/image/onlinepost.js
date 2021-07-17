import React from "react";
import { Dimensions } from 'react-native'
import { SvgXml } from "react-native-svg";
const { width } = Dimensions.get("window")
const height = width * 0.6
const OnlinePost = function SvgComponent() {
    const svgMarkup = `<svg id="ab417dfc-6aee-4864-9cf8-52df03cfbca4" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="905.67538" height="730.51882" viewBox="0 0 905.67538 730.51882"><path d="M1041.51938,733.238c-3.31771-26.67813-19.85136-52.96384-45.29423-61.64563a123.86326,123.86326,0,0,1-.00614,85.04047c-3.90959,10.5753-9.35913,21.9305-5.68165,32.5888,2.28809,6.63189,7.88559,11.70587,14.14246,14.87849,6.25727,3.17263,13.20152,4.68476,20.05886,6.16664l1.34957,1.11617C1036.97418,786.80191,1044.83708,759.9161,1041.51938,733.238Z" transform="translate(-147.16231 -84.74059)" fill="#f0f0f0"/><path d="M995.97267,672.09678a105.86971,105.86971,0,0,1,26.31905,59.58345,45.591,45.591,0,0,1-.5186,14.27516,26.14848,26.14848,0,0,1-6.50347,12.12823c-2.93126,3.22058-6.30257,6.17543-8.39991,10.05247a16.01083,16.01083,0,0,0-.7822,13.07062c1.85173,5.3111,5.50139,9.64009,9.21758,13.74946,4.12611,4.56266,8.48414,9.23647,10.238,15.28536.21251.73291,1.33731.36031,1.12512-.37149-3.0515-10.524-13.26755-16.50188-18.13955-25.98073-2.27337-4.423-3.22759-9.55792-1.09634-14.22685,1.86368-4.08278,5.3376-7.13282,8.33375-10.36807a27.9026,27.9026,0,0,0,6.80084-11.62188A42.14787,42.14787,0,0,0,1023.6325,733.47a102.71228,102.71228,0,0,0-7.50152-31.21348,107.7471,107.7471,0,0,0-19.3743-31.04834c-.50661-.56729-1.28731.32506-.784.88864Z" transform="translate(-147.16231 -84.74059)" fill="#fff"/><path d="M1021.97279,724.50986a15.88382,15.88382,0,0,0,12.09073-16.6389c-.06037-.76-1.24413-.70184-1.18368.05912a14.70811,14.70811,0,0,1-11.27854,15.45467c-.74175.17635-.366,1.30046.37149,1.12511Z" transform="translate(-147.16231 -84.74059)" fill="#fff"/><path d="M1016.971,756.64641a30.61482,30.61482,0,0,1-13.67134-17.63188c-.2151-.73212-1.34-.35975-1.12512.3715a31.84406,31.84406,0,0,0,14.26357,18.31865c.657.38973,1.18635-.67065.53289-1.05827Z" transform="translate(-147.16231 -84.74059)" fill="#fff"/><path d="M1010.39138,692.00039a8.991,8.991,0,0,1-8.52045-.43253c-.65176-.39787-1.18041.663-.5329,1.05826a10.07515,10.07515,0,0,0,9.42484.49938.61233.61233,0,0,0,.37681-.7483.59541.59541,0,0,0-.7483-.37681Z" transform="translate(-147.16231 -84.74059)" fill="#fff"/><path d="M918.6717,719.24273c.3999.26.7998.52,1.20019.79a118.40769,118.40769,0,0,1,15.13965,11.81994c.37012.33.74023.67,1.1001,1.01a124.82726,124.82726,0,0,1,27.10986,37.11005,121.22249,121.22249,0,0,1,6.64014,17.18c2.45019,8.13,4.46,17.14,9.31005,23.79a20.7951,20.7951,0,0,0,1.62012,2h43.83008c.09961-.05.19971-.09.2998-.14l1.75.08c-.07031-.31-.1499-.63-.22021-.94-.04-.18-.08984-.36-.12988-.54-.02979-.12-.06006-.24-.08008-.35-.00977-.04-.02-.08-.02979-.11-.02-.11-.05029-.21-.07031-.31q-.65991-2.685-1.35986-5.37c0-.01,0-.01-.00977-.02-3.59033-13.63-8.35009-27.08-15-39.38-.20019-.37-.3999-.75-.62011-1.12a115.67433,115.67433,0,0,0-10.39014-15.76,102.26018,102.26018,0,0,0-6.81006-7.79,85.03667,85.03667,0,0,0-21.27978-15.94c-15.72022-8.3-33.91993-11.48-50.72022-6.41C919.52179,718.97277,919.10138,719.10271,918.6717,719.24273Z" transform="translate(-147.16231 -84.74059)" fill="#f0f0f0"/><path d="M918.77023,719.799a105.86979,105.86979,0,0,1,56.88764,31.72816,45.591,45.591,0,0,1,8.18056,11.71015,26.14849,26.14849,0,0,1,2.10938,13.59926c-.40144,4.33627-1.31421,8.72531-.65458,13.08365a16.01084,16.01084,0,0,0,7.24487,10.90711c4.67615,3.12573,10.19656,4.38485,15.63785,5.42854,6.04151,1.15883,12.33511,2.26677,17.37735,6.04049.61094.45724,1.2847-.51746.67468-.974-8.77264-6.56563-20.52866-5.18785-30.12561-9.82289-4.47811-2.1628-8.33157-5.68823-9.44091-10.69928-.97007-4.38194-.03267-8.90876.41173-13.29581a27.90239,27.90239,0,0,0-1.56708-13.374,42.14783,42.14783,0,0,0-7.70016-11.98145,102.7127,102.7127,0,0,0-24.78221-20.40579,107.74722,107.74722,0,0,0-34.16255-13.12569c-.746-.14793-.83213,1.03459-.091,1.18156Z" transform="translate(-147.16231 -84.74059)" fill="#fff"/><path d="M971.08617,745.99407a15.88384,15.88384,0,0,0-.364-20.56469c-.50574-.57043-1.41593.18867-.90951.75986a14.70808,14.70808,0,0,1,.29949,19.13015c-.48606.58739.49073,1.25871.974.67468Z" transform="translate(-147.16231 -84.74059)" fill="#fff"/><path d="M986.44093,774.66473a30.61478,30.61478,0,0,1-21.53141-5.847c-.61254-.45506-1.28648.5195-.67468.974a31.844,31.844,0,0,0,22.41775,6.03877c.75924-.0844.54346-1.24974-.21166-1.16581Z" transform="translate(-147.16231 -84.74059)" fill="#fff"/><path d="M942.26611,727.00988a8.991,8.991,0,0,1-7.06351,4.78455c-.75994.07473-.54333,1.24.21166,1.1658a10.07514,10.07514,0,0,0,7.82586-5.27567.61233.61233,0,0,0-.14967-.82435.59542.59542,0,0,0-.82434.14967Z" transform="translate(-147.16231 -84.74059)" fill="#fff"/><path d="M606.96069,257.68784h-3.99878V148.14251a63.40184,63.40184,0,0,0-63.40179-63.40192H307.47339a63.40184,63.40184,0,0,0-63.402,63.40166V749.11672a63.40186,63.40186,0,0,0,63.40179,63.40192H539.55981a63.40187,63.40187,0,0,0,63.402-63.40168V335.66408h3.99884Z" transform="translate(-147.16231 -84.74059)" fill="#3f3d56"/><path d="M542.11816,101.23557h-30.295A22.49487,22.49487,0,0,1,490.996,132.2261H358.03656a22.49487,22.49487,0,0,1-20.82715-30.99057H308.91385A47.34779,47.34779,0,0,0,261.566,148.58326v600.0926a47.34778,47.34778,0,0,0,47.34777,47.34784H542.11816A47.3478,47.3478,0,0,0,589.466,748.67592h0V148.58332A47.34777,47.34777,0,0,0,542.11816,101.23557Z" transform="translate(-147.16231 -84.74059)" fill="#fff"/><rect x="228.11606" y="177.70432" width="82.65982" height="7.67616" fill="#6c63ff"/><rect x="228.11606" y="204.25859" width="144.06912" height="7.67616" fill="#e6e6e6"/><rect x="228.11606" y="230.81287" width="143.92807" height="7.67616" fill="#e6e6e6"/><rect x="149.57644" y="177.81828" width="61.4093" height="61.40932" fill="#6c63ff"/><rect x="228.11606" y="338.90375" width="82.65982" height="7.67615" fill="#6c63ff"/><rect x="228.11606" y="365.45804" width="144.06912" height="7.67615" fill="#e6e6e6"/><rect x="228.11606" y="392.0123" width="143.92807" height="7.67615" fill="#e6e6e6"/><rect x="149.57644" y="339.01773" width="61.4093" height="61.4093" fill="#6c63ff"/><rect x="228.11606" y="500.10318" width="82.65982" height="7.67615" fill="#6c63ff"/><rect x="228.11606" y="526.65747" width="144.06912" height="7.67615" fill="#e6e6e6"/><rect x="228.11606" y="553.21173" width="143.92807" height="7.67615" fill="#e6e6e6"/><rect x="149.57644" y="500.21716" width="61.4093" height="61.4093" fill="#6c63ff"/><polygon points="725.531 715.905 713.29 716.579 704.864 669.683 722.931 668.689 725.531 715.905" fill="#ffb6b6"/><path d="M876.46882,812.33929l-39.471,2.17354-.02752-.49924A15.38729,15.38729,0,0,1,851.487,797.8041l.001-.00006,24.10752-1.32744Z" transform="translate(-147.16231 -84.74059)" fill="#2f2e41"/><polygon points="468.885 527.295 467.301 515.138 513.439 503.242 515.777 521.184 468.885 527.295" fill="#ffb6b6"/><path d="M604.66766,616.67182l-5.10832-39.19932.49581-.06463a15.3873,15.3873,0,0,1,17.246,13.26856l.00013.001,3.1199,23.94162Z" transform="translate(-147.16231 -84.74059)" fill="#2f2e41"/><path d="M770.80054,535.20236a10.52605,10.52605,0,0,1,1.56249.55311l41.954-26.44521-.44854-12.03966L831.95,494.21884l2.86536,21.23668a8,8,0,0,1-4.68255,8.38175L778.56322,546.7276a10.4971,10.4971,0,1,1-7.76268-11.52524Z" transform="translate(-147.16231 -84.74059)" fill="#ffb6b6"/><path d="M812.40094,507.633a4.49518,4.49518,0,0,1-1.6449-3.36672l-.55876-22.57854a12.49741,12.49741,0,0,1,24.613-4.35151l7.10906,21.51458A4.5,4.5,0,0,1,838.417,504.696l-22.392,3.8912A4.49494,4.49494,0,0,1,812.40094,507.633Z" transform="translate(-147.16231 -84.74059)" fill="#e4e4e4"/><circle cx="700.12018" cy="330.04261" r="30.44946" fill="#2f2e41"/><circle cx="710.77185" cy="297.9948" r="12.59979" fill="#2f2e41"/><path d="M874.73389,375.91052a12.601,12.601,0,0,0-11.28729-12.53164,12.72977,12.72977,0,0,1,1.3125-.06812,12.59978,12.59978,0,0,1,0,25.19956,12.74944,12.74944,0,0,1-1.3125-.06812A12.60106,12.60106,0,0,0,874.73389,375.91052Z" transform="translate(-147.16231 -84.74059)" fill="#2f2e41"/><circle cx="700.107" cy="343.89619" r="19.25398" fill="#ffb8b8"/><path d="M879.31891,561.49783s-.91687,22.92139-4.58429,34.84058,2.75061,180.62079-.45837,184.74664-18.33716,2.75055-18.33716,2.75055l-14.03358-87.89286s-2.46984-93.18636-36.39355-95.47847-166.40948,10.54388-166.40948,10.54388l-2.75055-18.79553,71.0564-15.58655s65.0968-22.463,100.85424-16.50342S879.31891,561.49783,879.31891,561.49783Z" transform="translate(-147.16231 -84.74059)" fill="#2f2e41"/><path d="M875.19306,450.5582c3.66748-2.75055,12.836.91687,12.836.91687l10.08545,29.79785s-5.04272,25.672-9.627,39.88327-13.41572,77.03594-11.582,79.78655-29.67657-19.73238-48.47216-26.60885-22.92145-14.66973-22.92145-14.66973,20.62928-29.33942,13.75287-43.09226-1.3753-29.33942-1.3753-29.33942l-2.75055-15.58657,15.58655-8.71015S871.52558,453.30875,875.19306,450.5582Z" transform="translate(-147.16231 -84.74059)" fill="#e4e4e4"/><ellipse cx="696.57807" cy="323.58656" rx="20.99963" ry="12.59979" fill="#2f2e41"/><path d="M964.41425,458.57631a10.52681,10.52681,0,0,0-.56228,1.55921L916.80814,475.8316,907.7788,467.855l-13.81911,12.05347,14.61236,15.67437a8,8,0,0,0,9.45126,1.68926l50.38733-25.38721a10.4971,10.4971,0,1,0-3.99639-13.30862Z" transform="translate(-147.16231 -84.74059)" fill="#ffb6b6"/><path d="M915.16641,476.69464l-17.2,14.856a4.5,4.5,0,0,1-6.74113-.99474l-12.13808-19.1333a12.49741,12.49741,0,0,1,18.96363-16.28243l17.11209,14.74039a4.5,4.5,0,0,1,.00353,6.81412Z" transform="translate(-147.16231 -84.74059)" fill="#e4e4e4"/><path d="M1051.647,815.25941H148.353a1.19069,1.19069,0,0,1,0-2.38137h903.294a1.19068,1.19068,0,0,1,0,2.38137Z" transform="translate(-147.16231 -84.74059)" fill="#3f3d56"/></svg>
  `;
    const SvgImage = () => <SvgXml xml={svgMarkup} width={width} height={height} />;
    return <SvgImage />;
}
export default OnlinePost