export interface Restaraunt {
  name: String;
  location: String;
  rating: {
    count: number;
    average: number;
  };
}

export interface RestarauntApi {
  id: Number,
  averageCheck: number,
  cuisines: [],
  delivery: String,
  dietaryRestrictions: [],
  hasParking: Boolean,
  hasWifi: Boolean,
  meals: [],
  openTime: String,
  payment: [],
  reservation: String,
  status: String,
  statusReason: String,
  type: String,
  website: String,
  info: {
      location: {
          id: Number,
          name: String,
      },
      name: String,
      description: String
  }
}
