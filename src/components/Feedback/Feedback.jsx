export default function Feedback({
  feedbacks: { good, neutral, bad },
  totalFeedback,
  goodPercentage,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {goodPercentage}%</p>
    </div>
  );
}
