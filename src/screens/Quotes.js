import { Fragment, useEffect } from "react";
import useHttp from "../components/hooks/use-http";
import { getAllQuotes } from "../components/lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Quotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    <NoQuotesFound text="Quotes" />;
  }

  return (
    <Fragment>
      <h1>Quotes</h1>
      <QuoteList quotes={loadedQuotes} />
    </Fragment>
  );
};

export default Quotes;
