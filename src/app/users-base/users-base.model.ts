
// vamos a crear una clase y a 
// definir un modelo de datos
export class UsersBasicModel{
// lo haremos dentro del constructor entre los paréntesis
// de este modo, inicializamos las propiedades y a la vez, le asignamos un valor que nos vendrá por parámetros
   constructor(
     public id :number,
     public login: string,
     public nombre: string,
     public email: string,
     public password: string,


   ){}

}

// clase usuario base y derivados de la clase
export class UserOtherModel extends UsersBasicModel{
      constructor(
         id:number,
          login:string,
         nombre:string,
         email:string,
         password:string,
         public profile: string,
         public private_data: string)
      
      {
        // from SOverflow: The super call must supply all parameters for base class. The constructor is not inherited. 
       super(id,login,nombre,email,password)
      }

}