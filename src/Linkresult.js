import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
const Linkresult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchData = async () => {
    try {
      setLoading(true);
      const mes = axios
        .get(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
        .then((res) => {
          setShortenLink(res.data.result.full_short_link);
        })
        .catch((err) => {
          setError(err);
        });
    } catch (err) {
      setError(err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);
  useEffect(() => {
    const Timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => {
      clearTimeout(Timer);
    };
  }, [copied]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }
  if (error) {
    return <p className="noData">Something Went Wrong...</p>;
  }
  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => {
              setCopied(true);
            }}
          >
            <button className={copied ? "copied" : ""}>
              Copy to Clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default Linkresult;
