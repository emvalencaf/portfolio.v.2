import { Project } from "./project";

export type Portfolio = {

}

export type Section = {
	title: string;
    children?: string;
    background?: boolean;
    icon?: "home" | "about" | "skills" | "projects" | "other";
    color?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary" | "senary";
    backgroundImg?: string;
}

export type CreateSectionData = Section & {
    owner?: string;
    techs?: Tech[];
    ocupation?: string;
    mainStack?: string[];
    biosData?: BiosData;
    workData?: WorkData;
    educationData?: EducationData;
    projects?: Project[];
    urlDownload?: string;
}

export interface BiosData {
    bios: string;
    profilePhoto?: ProfilePhoto;
}

export interface Work {
    employer: string;
    ocupation: string;
    jobDescription: string;
    startIn: Date;
    endIn: Date;
    showData: boolean;
}

export interface WorkData {
    workExperience: Work[];
}

export interface Education {
    title: string;
    workTime: string | number;
    institution: string;
    resume?: string;
    startIn: Date;
    endIn?: Date;
    urlDownload?: string;
}

export interface EducationData {
    higherEducation: Education[];
    courses: Education[];
}

export interface Tech {
    techName: string;
    techDescription: string;
    icon?: string;
    showTechDescription?: boolean;
}

export interface ProfilePhoto {
    srcImg: string;
    altText: string;
}

