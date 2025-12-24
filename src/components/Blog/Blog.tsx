import BlogCardGroup from "./Components/BlogCardGroup"; import BlogCard from "./Components/BlogCard"; import BlogHeader from "./Components/BlogHeader"; export default function Blog() { return (
    <>
      <BlogHeader />
      <div>
        <BlogCardGroup>
          <BlogCard
            title="Getting Started With Redux, React Typescript, Electron using Vite"
            link="https://medium.com/@tweiss747/getting-started-with-redux-react-typescript-electron-using-vite-ffed63074602"
            description="In this blog I show how to get up and running with a simple React project using Redux, Typescript, and Electron using Vite"
            img="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*TQQuSKwsCAqzxfe1KoJ3jg.png"
          />
          <BlogCard
            title="Building a Simple Calculator Using React, Typescript"
            link="https://medium.com/@tweiss747/getting-started-with-redux-react-typescript-electron-using-vite-ffed63074602"
            description="I show you step by step how to build a simple calculator using React, Typescript, and Electron using Vite. This blog post was published on Stackademic, a learning hub for programmers, devs, and engineers."
            img="https://miro.medium.com/v2/resize:fit:4800/format:webp/0*y5HeJPzzyg40wKKP"
          />
          <BlogCard
            title="6 Tools That Transformed My Terminal Into an IDE"
            link="https://medium.com/@tweiss747/6-tools-that-transformed-my-terminal-into-an-ide-731a59d5f628"
            description="I share 6 tools that made me ditch vscode for terminal based development."
            img="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*VzFbUJ1Er7gUSf4yARySIA.png"
          />
        </BlogCardGroup>
      </div>
    </>
  );
}
