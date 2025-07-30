
import VideoExerciseCard from './components/VideoExerciseCard';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Interactive Video Exercise</h1>
        <VideoExerciseCard />
      </div>
    </div>
  );
}


export default App;