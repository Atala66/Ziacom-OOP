
// vamos a crear una clase y a definir un modelo de datos
// 1- Definimos propiedades: tipo de dato e inicializamos, normalmente a  '' o a null
// 2- Definimos los getters y los setters de las propiedades.

// CUIDADO: Si inicializamos las propiedades en el constructor, cada vez que instanciemos un nuevo objeto, tenemos que pasarle las propiedades
// o petará. Los getters y setters no valdrían porque ya se ha hecho sobre el constructor.
export class UsersBasicModel {
  // lo haremos dentro del constructor entre los paréntesis
  // de este modo, inicializamos las propiedades y a la vez, le asignamos un valor que nos vendrá por parámetros
 // public id: number = null;
  public login: string = '';
  public nombre: string = '';
  public email: string = '';
  public password: number = null;

 /* set setId(valor: number) {
    this.id = valor;
   // console.log(this.id);
  }
  get getId() {
    return this.id;
  } */
  set setLogin(valor: string) {
    this.login = valor;
  }

  get getLogin() {
    return this.login;
  }

  set setNombre(valor: string) {
    this.nombre = valor;
   // console.log(this.nombre);
  }
  get getNombre() {
    return this.nombre;
  }
  set setEmail(valor: string) {
    this.email = valor;
   // console.log(this.email);
  }
  get getEmail() {
    return this.email;
  }
  set setPassword(valor: number) {
    this.password = valor;
  //  console.log(this.password);
  }

  get getPassword() {
    return this.password;
  }
  constructor(
    /*public id :number = 0,
    public login: string ='hola',
    public nombre: string ='',
    public email: string ='',
    public password: string ='',*/
  ) { }
}
// clase usuario base y derivados de la clase
export class UserOtherModel extends UsersBasicModel {
  public profile: string = '';
  public private_data: Array<any> = [];

  set setProfile(valor: string) {
    this.profile = valor;
  }

  get getProfile() {
    return this.profile;
  }
  set setPrivateData(valor: Array<any>) {
    this.private_data = valor;
  }

  get getPrivateData() {
    return this.private_data;
  }
  constructor() {
    super();
    // from SOverflow: The super call must supply all parameters for base class. The constructor is not inherited. 
    //super(id,login,nombre,email,password)

  }

}