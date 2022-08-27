/* eslint-disable no-unused-vars */

import Logger from 'utils/logger';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Window = window as any;

export const LocalStorage = {
  set<T = string | boolean>(key: string, value: T): void {
    try {
      Window.localStorage?.setItem(
        key,
        typeof value === 'object' ? JSON.stringify(value) : `${value}`
      );
    } catch (error) {
      Logger.logException(error);
    }
  },
  remove<T = string | boolean>(key: string): T {
    try {
      return Window.localStorage?.removeItem(key) as T;
    } catch (error) {
      Logger.logException(error);
      return null;
    }
  },
  get<T = string | boolean>(key: string): T {
    try {
      return tryParse(Window.localStorage?.getItem(key)) as T;
    } catch (error) {
      Logger.logException(error);
      return null;
    }
  }
};

function tryParse(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}
export const SessionStore = {
  set<T = string | boolean>(key: string, value: T): void {
    try {
      Window.sessionStorage?.setItem(key, value.toString());
    } catch (error) {
      Logger.logException(error);
    }
  },
  get<T = string | boolean>(key: string): T {
    try {
      return Window.sessionStorage?.getItem(key) as T;
    } catch (error) {
      Logger.logException(error);
      return null;
    }
  }
};
