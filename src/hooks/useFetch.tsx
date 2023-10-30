import { useState } from 'react';

type initBaseUrlType = string;

type initUrlType = string;

type initBody = any | string | number;

export default function useFetch(baseUrl: initBaseUrlType) {
  const [loading, setLoading] = useState(true);

  function get(url: initUrlType | null) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  function post(url: initUrlType, body: initBody) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get, post, loading };
}
