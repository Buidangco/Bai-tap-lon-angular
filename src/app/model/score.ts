export class Score{
  iD_Student:string;
  name_Student:string;
  sex_Student:string;
  date_student:Date;
  medium_score:number;
  exercise_score:number;
  attendance:number;
  total_scores:number;
  summary_score:number;
  name_Subject:string;
  practice:number;
  iD_plan:string;
  iD_Semester:string;
  diemhoclai1:number;
  // diemhoclai2:number;
}

export class diemtheolop{
  iD_Student:string;
  name_Student:string;
  sex_Student:string;
  date_student:Date;
  medium_score:number;
  exercise_score:number;
  attendance:number;
  total_scores:number;
  summary_score:number;
  name_Subject:string;
  practice:number;
  iD_class:string;
}

export class Score1{
  id_plan:string;
  name_subject:string;
  name_teach:string;
  name_plan:string;
  name_Faculty:string;
  seme:string;
  namspect:string
}
export class dssinhvien{
  iD_Student:string;
  iD_class:string;
  name_Student:string;
  sex_Student:string;
  village_Studen:string;
  date_student:Date;
  name_Faculty:string
}
export class lop{
  iD_class:string;
  name_class:string;
  iD_Faculty:string;
  iD_Course:string;
  iD_system:string;
  year_class:Date;
  Population:string;
  ID_Specialized:string
}

export class khoa{
  iD_Faculty:string;
  name_Faculty:string;
  address_Faculty:string;
  phone_Faculty:string;
  website_Faculty:string;
}

export class khoatheolop{
  iD_Faculty:string;
  name_Faculty:string;
  iD_class:string;
  name_class:string;
}
export class sinhvien{
  iD_Student:string;
  iD_class:string;
  name_Student:string;
  sex_Student:string;
  village_Studen:string;
  date_student:Date;
}

export class hocky{
  iD_Semester:string;
  name_Semester:string
}

export class tracuuma{
  name_Subject:string;
  total_scores:number;
  name:string;
  iD_Student:string
}


export class sinhviendiem{
  iD_Student:string;
  name_Student:string;
  sex_Student:string;
  village_Studen:string;
  date_student:Date;
  name_plan:string;
  ID_plan:string;
  ID_Semester:string;
  name_Semester:string;
}

export class themdiemsv{
  id_scores:string;
  id_student:string;
  id_plan:string;
  iD_Semester:string;
  attendance:number;
  exercise_score:number;
  medium_score:number;
  summary_score:number;
  total_score:number;
  practice:number;
  diemhoclai1:number
}

export class monhocutehy{
  id_subject:string;
  name_subject:string
}

export class svtruot{
  iD_Student:string;
  iD_class:string;
  name_student:string;
  sex_student:string;
  date_student:Date;
  name_Subject:string;
}

export class svtruotmon{
  iD_Student:string;
  iD_class:string;
  name_student:string;
  sex_student:string;
  date_student:Date;
  name_Subject:string;
}

export class khoahoc{
  id_Course:string;
  name_Course:string
}

export class laykehoach{
  iD_plan:string;
  name_plan:string;
  name_Subject:string;
  name_Semester:string;
  iD_Semester:string;
  id_Subject:string;
}

export class idlop{
id_lop:string
}

export class Accout{
  id:string;
  firstName:string;
  lastName:string;
  username:string;
  password:string;
  role:string;
}
