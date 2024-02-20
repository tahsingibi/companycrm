export const localError = {
  get: (key) =>
    `An error occurred while retrieving the ${key} element from LocalStorage: `,
  set: (key) =>
    `An error occurred while saving the ${key} element to LocalStorage: `,
  remove: (key) =>
    `An error occurred while removing the ${key} element from LocalStorage: `,
  clear: 'An error occurred while clearing LocalStorage: ',
};

function get(key) {
  try {
    if (typeof window != 'undefined') {
      return localStorage.getItem(key) || null;
    }
  } catch (error) {
    console.error(localError.get(key, error));
  }
}

function set(key, value) {
  try {
    if (typeof window != 'undefined') {
      const data = JSON.stringify(value);
      localStorage.setItem(key, data);
    }
  } catch (error) {
    console.error(localError.set(key, error));
  }
}

function remove(key) {
  try {
    if (typeof window != 'undefined') {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.error(localError.remove(key, error));
  }
}

function clear() {
  try {
    if (typeof window != 'undefined') localStorage.clear();
  } catch (error) {
    console.error(localError.clear);
  }
}

const useLocalStorage = {
  get,
  set,
  remove,
  clear,
};

export default useLocalStorage;
