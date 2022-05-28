import mongoose from "mongoose";

const StateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    maxlength: 2,
  },
  population: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  formationDate: {
    type: String,
    required: true,
  },
  capitalCity: {
    type: [String],
    required: true,
  },
  largestCity: {
    type: String,
  },
  numberDistricts: {
    type: Number,
  },
  gdpPerCapita: {
    type: Number,
    min: 0,
  },
  officialLanguages: {
    type: [String],
  },
  literacyRate: {
    type: Number,
    min: 0.0,
    max: 100.0,
  },
  sexRatio: {
    type: Number,
    min: 0,
  },
  hdi: {
    type: Number,
    min: 0.0,
    max: 1.0,
  },
  emblemUrl: {
    type: String,
  },
  websiteUrl: {
    type: String,
  },
});

export default mongoose.model("State", StateSchema);

export interface StateType {
  name: string;
  code: string;
  population: number;
  area: number;
  formationDate: string;
  capitalCity: [string];
  largestCity: string;
  numberDistricts: number;
  gdpPerCapita: number;
  officialLanguages: [string];
  literacyRate: number;
  sexRatio: number;
  hdi: number;
  emblemUrl: string;
  websiteUrl: string;
}
