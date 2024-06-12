import Star from "../components/Star";
import StarTwo from "../components/StarTwo";

export default function About() {
  return (
    <div>
      <h1 className="text-center text-2xl font-medium mb-12">About</h1>
      <div className="flex flex-col sm:flex-row justify-around items-center">
        <Star />
        <div className="w-5/6 h-1/2 mb-8 flex flex-col items-center border border-black p-12 sm:mb-0 sm:w-1/3">
          <p className="mb-4">
            Hi! I&apos;m Lucy, a frontend web developer based in Derby, UK. I
            recently completed an intensive bootcamp course with Tech Educators,
            where I delved into the world of full stack development and gained a
            deep understanding of the tech industry.
          </p>
          <p className="mb-4">
            Throughout this journey, I mastered HTML, Tailwind CSS, Next.js,
            SQL, and TypeScript. I had the opportunity to collaborate on
            multiple group projects, creating full stack applications, and even
            conducted a research project where I implemented an accessibility
            feature on an app. This experience has been incredibly enriching,
            and I&apos;m eager to embark on personal projects and continue
            expanding my skills.
          </p>
          <p className="mb-4">
            In my spare time, I volunteer at the White Rose charity shop, which
            helps me stay social and enhances my communication skills. I&apos;m
            also an avid reader and am currently engrossed in &apos;The
            Three-Body Problem.&apos; With a background in art, including a
            first-class degree in Fine Art, I bring a creative perspective to my
            work in web development.
          </p>
          <p>
            I&apos;m passionate about combining my technical expertise and
            artistic background to create engaging and accessible web
            experiences. I look forward to connecting with you and exploring new
            opportunities!
          </p>
        </div>
        <StarTwo />
      </div>
    </div>
  );
}
