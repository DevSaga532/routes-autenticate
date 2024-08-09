// Definir constantes para los tipos de acción
const RESTORE_TOKEN = 'RESTORE_TOKEN';
const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

export const authReducer = (prevState, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      // Restaurar el token del usuario y cambiar el estado de carga
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case SIGN_IN:
      // Iniciar sesión y actualizar el token del usuario
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case SIGN_OUT:
      // Cerrar sesión y eliminar el token del usuario
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
    default:
      // Retornar el estado previo si la acción no coincide con ningún caso
      return prevState;
  }
};
