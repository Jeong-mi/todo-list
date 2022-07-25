import {
  FaRegCheckCircle,
  FaRegCircle,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

export function Done() {
  return <FaRegCheckCircle className="text-4xl text-green-400" />;
}

export function NotYet() {
  return <FaRegCircle className="text-4xl text-gray-300" />;
}

export function QuoteLeft() {
  return <FaQuoteLeft className="text-green-400" />;
}

export function QuoteRight() {
  return <FaQuoteRight className="text-green-400" />;
}
