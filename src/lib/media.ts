const pexels = (id: string, width = 2200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&q=100`;

export const MEDIA = {
  homeHero: pexels("28701128", 2200),
  methodDoctor: pexels("5214951", 1600),
  salmonPlate: pexels("33376827", 1700),
  membershipHero: pexels("15913488", 1900),
  healthFoodRow: pexels("30635719", 1800),
  testimonials: {
    mariana: pexels("5253850", 900),
    carlos: pexels("33538858", 900),
    lucia: pexels("22549170", 900),
  },
  healthStories: {
    claudia: pexels("31963785", 900),
    roberto: pexels("33538858", 900),
    daniela: pexels("7485094", 900),
    laura: pexels("5253850", 900),
  },
  membershipPosts: {
    diabetes: pexels("6823504", 1200),
    embarazo: pexels("7485094", 1200),
    renal: pexels("30635719", 1200),
    inflamacion: pexels("15913488", 1200),
    digestion: pexels("6740514", 1200),
  },
  resources: {
    hero: pexels("28701128", 2600),
    diabetes: pexels("6823504", 2400),
    renal: pexels("30635719", 2400),
    embarazo: pexels("7485094", 2400),
    insulina: pexels("19870648", 2400),
    digestion: pexels("6740514", 2400),
    inflamacion: pexels("8696472", 2400),
    metabolico: pexels("30635719", 2400),
    meriendasEmbarazo: pexels("5852331", 2400),
    renalPlan: pexels("30635719", 2400),
    hipertension: pexels("5215000", 2400),
    prediabetes: pexels("19870648", 2400),
    controlGlucemico: pexels("6823504", 2400),
  },
} as const;
