/** Zip-distributed manufacturer gallery — paths under public/media/gallery. */

export type GalleryFolder = {
  slug: string;
  title: string;
  series: "performance" | "security";
  folder: string;
  images: { src: string; alt: string }[];
};

const g = (folder: string, file: string) =>
  `/media/gallery/${folder}/${file}`;

export const galleryFolders: GalleryFolder[] = [
  {
    slug: "single-hung",
    title: "Single Hung",
    series: "performance",
    folder: "performance/single-hung",
    images: [
      { src: g("performance/single-hung", "a1single-hung-performance-1.jpg"), alt: "Single hung Performance window" },
      { src: g("performance/single-hung", "a2single-hung-performance.jpg"), alt: "Single hung Performance elevation" },
      { src: g("performance/single-hung", "antigua-national-museum-antigua-20081.jpg"), alt: "Antigua National Museum single hung install" },
      { src: g("performance/single-hung", "cara-court-dscn0904.jpg"), alt: "Cara Court single hung openings" },
      { src: g("performance/single-hung", "dscf0076.jpg"), alt: "Single hung exterior detail" },
      { src: g("performance/single-hung", "gallery-8-.jpg"), alt: "Single hung Caribbean home" },
    ],
  },
  {
    slug: "horizontal-slider",
    title: "Horizontal Slider",
    series: "performance",
    folder: "performance/horizontal-slider",
    images: [
      { src: g("performance/horizontal-slider", "0horizontal-slider-performance-1.jpg"), alt: "Horizontal slider Performance product" },
      { src: g("performance/horizontal-slider", "12horizontal-slider-performance.jpg"), alt: "Horizontal slider Performance" },
      { src: g("performance/horizontal-slider", "c-p-baynes-kitchen.jpg"), alt: "Kitchen with horizontal slider openings" },
      { src: g("performance/horizontal-slider", "sheriff-project-2011-005.jpg"), alt: "Sheriff project horizontal slider" },
      { src: g("performance/horizontal-slider", "sheriff-project-2011-010.jpg"), alt: "Sheriff project slider elevation" },
      { src: g("performance/horizontal-slider", "dscf0018.jpg"), alt: "Horizontal slider daylight interior" },
    ],
  },
  {
    slug: "awning-operator",
    title: "Awning Operator",
    series: "performance",
    folder: "performance/awning-operator",
    images: [
      { src: g("performance/awning-operator", "awning-pushout-operator-1.jpg"), alt: "Awning operator window" },
      { src: g("performance/awning-operator", "awning-pushout-operator.jpg"), alt: "Awning operator product" },
      { src: g("performance/awning-operator", "c-p-baynes-kitchen.jpg"), alt: "Awning openings in kitchen" },
      { src: g("performance/awning-operator", "mg_0572.jpg"), alt: "Awning operator install" },
      { src: g("performance/awning-operator", "gallery-8-.jpg"), alt: "Awning operator Caribbean home" },
    ],
  },
  {
    slug: "awning-pushout",
    title: "Awning Pushout",
    series: "performance",
    folder: "performance/awning-pushout",
    images: [
      { src: g("performance/awning-pushout", "gallery-1-.jpg"), alt: "Awning pushout window" },
      { src: g("performance/awning-pushout", "gallery-2-.jpg"), alt: "Awning pushout elevation" },
      { src: g("performance/awning-pushout", "gallery-3-.jpg"), alt: "Awning pushout detail" },
      { src: g("performance/awning-pushout", "293.jpg"), alt: "Awning pushout install" },
      { src: g("performance/awning-pushout", "326.jpg"), alt: "Awning pushout exterior" },
    ],
  },
  {
    slug: "casement-operator",
    title: "Casement Operator",
    series: "performance",
    folder: "performance/casement-operator",
    images: [
      { src: g("performance/casement-operator", "1performance-casement-operator-1.jpg"), alt: "Casement operator Performance" },
      { src: g("performance/casement-operator", "1performance-casement-operator.jpg"), alt: "Casement operator product" },
      { src: g("performance/casement-operator", "dscf0021.jpg"), alt: "Casement operator interior" },
      { src: g("performance/casement-operator", "img_6484.jpg"), alt: "Casement operator elevation" },
      { src: g("performance/casement-operator", "gallery-6-.jpg"), alt: "Casement operator home" },
    ],
  },
  {
    slug: "casement-pushout",
    title: "Casement Pushout",
    series: "performance",
    folder: "performance/casement-pushout",
    images: [
      { src: g("performance/casement-pushout", "1performance-casement-pushout-1_resized.jpg"), alt: "Casement pushout Performance" },
      { src: g("performance/casement-pushout", "1performance-casement-pushout_resized.jpg"), alt: "Casement pushout product" },
      { src: g("performance/casement-pushout", "jla04747.jpg"), alt: "Casement pushout install" },
      { src: g("performance/casement-pushout", "jla04759.jpg"), alt: "Casement pushout elevation" },
      { src: g("performance/casement-pushout", "jla04770.jpg"), alt: "Casement pushout detail" },
    ],
  },
  {
    slug: "picture-fixed",
    title: "Picture (Fixed)",
    series: "performance",
    folder: "performance/picture-fixed",
    images: [
      { src: g("performance/picture-fixed", "gallery-1-.jpg"), alt: "Picture fixed window" },
      { src: g("performance/picture-fixed", "gallery-2-.jpg"), alt: "Picture window elevation" },
      { src: g("performance/picture-fixed", "gallery-4-.jpg"), alt: "Fixed glazing Caribbean home" },
      { src: g("performance/picture-fixed", "gallery-6-.jpg"), alt: "Picture window daylight" },
      { src: g("performance/picture-fixed", "gallery-11-.jpg"), alt: "Picture fixed install" },
    ],
  },
  {
    slug: "shaped",
    title: "Shaped",
    series: "performance",
    folder: "performance/shaped",
    images: [
      { src: g("performance/shaped", "dsc00250.jpg"), alt: "Shaped window" },
      { src: g("performance/shaped", "dscf0067.jpg"), alt: "Shaped opening detail" },
      { src: g("performance/shaped", "gallery-1-.jpg"), alt: "Shaped window elevation" },
      { src: g("performance/shaped", "gallery-3-.jpg"), alt: "Custom shaped glazing" },
      { src: g("performance/shaped", "_mg_0506.jpg"), alt: "Shaped window install" },
    ],
  },
  {
    slug: "multi-unit",
    title: "Multi Unit",
    series: "performance",
    folder: "performance/multi-unit",
    images: [
      { src: g("performance/multi-unit", "maracas-st-joseph-police-station.jpg"), alt: "Multi-unit Maracas St Joseph Police Station" },
      { src: g("performance/multi-unit", "st-joseph-police-station.jpg"), alt: "St Joseph Police Station multi-unit" },
      { src: g("performance/multi-unit", "dscn0904.jpg"), alt: "Multi-unit elevation" },
      { src: g("performance/multi-unit", "pa090174.jpg"), alt: "Multi-unit commercial install" },
      { src: g("performance/multi-unit", "img_6484.jpg"), alt: "Multi-unit window bank" },
    ],
  },
  {
    slug: "single-swing-doors",
    title: "Single Swing Doors",
    series: "security",
    folder: "security/single-swing-doors",
    images: [
      { src: g("security/single-swing-doors", "singleswing-economicalsecurity_resized.png"), alt: "Single swing Economical Security door" },
      { src: g("security/single-swing-doors", "img_9361resize.jpg"), alt: "Single swing door install" },
      { src: g("security/single-swing-doors", "dscn0956.jpg"), alt: "Single swing door elevation" },
      { src: g("security/single-swing-doors", "_mg_0026.jpg"), alt: "Single swing entry" },
      { src: g("security/single-swing-doors", "_dsc4051.jpg"), alt: "Single swing door detail" },
    ],
  },
  {
    slug: "double-swing-doors",
    title: "Double Swing Doors",
    series: "security",
    folder: "security/double-swing-doors",
    images: [
      { src: g("security/double-swing-doors", "doubleswingview-economicalsec_resized.png"), alt: "Double swing Economical Security doors" },
      { src: g("security/double-swing-doors", "blue-green-tint-swing-doors_resized.jpg"), alt: "Blue-green tint double swing doors" },
      { src: g("security/double-swing-doors", "sv-double.jpg"), alt: "Double swing view doors" },
      { src: g("security/double-swing-doors", "sheriff-project-2011-006.jpg"), alt: "Sheriff project double swing" },
      { src: g("security/double-swing-doors", "dsc00232.jpg"), alt: "Double swing door elevation" },
    ],
  },
];

export function getGalleryFolder(slug: string) {
  return galleryFolders.find((f) => f.slug === slug);
}

export const allGalleryImages = galleryFolders.flatMap((f) =>
  f.images.map((img) => ({ ...img, folder: f.slug, title: f.title, series: f.series }))
);
