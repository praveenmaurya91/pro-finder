export interface Post {
    uid?: string;
    $key?: string;

    projectName?: string;
    projectDescription?: string;
    projectRequiredSkill_1?: string;
    projectRequiredSkill_2?: string;
    projectRequiredSkill_3?: string;
    projectRequiredSkill_4?: string;
    studentMajor?: string[];
    studentYear?: string[];
    studentSemester?: string[];
    projectDuration?: string[];
    projectType?: string[];
    projectLocation?: string;
    paidOrUnpaid?: string[];
}