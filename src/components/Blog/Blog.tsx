import BlogCardGroup from "./Components/BlogCardGroup"; import BlogCard from "./Components/BlogCard"; import BlogHeader from "./Components/BlogHeader"; export default function Blog() { return (
    <>
      <BlogHeader />
      <div>
        <BlogCardGroup>
          <BlogCard
            title="sample title"
            link="https://medium.com/@tweiss747/getting-started-with-redux-react-typescript-electron-using-vite-ffed63074602"
            description="lorem ipsum dolar"
            img="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*TQQuSKwsCAqzxfe1KoJ3jg.png"
          />
          <BlogCard
            title="sample title"
            link="https://medium.com/@tweiss747/getting-started-with-redux-react-typescript-electron-using-vite-ffed63074602"
            description="lorem ipsum dolar"
            img="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*TQQuSKwsCAqzxfe1KoJ3jg.png"
          />
          <BlogCard
            title="sample title"
            link="https://medium.com/@tweiss747/getting-started-with-redux-react-typescript-electron-using-vite-ffed63074602"
            description="lorem ipsum dolarefiuwefuihawefuiha weaiuehf aiuw hefiuahif uaefhaief haiehfiuahefiuahwfi aefhaiuefh afah fehawefhawiefh aiuhf ahf aiehfiah efa fhafehafhaiuwhe f wefjwfjwifj wio ejfiwefiowjefoijwefo weofjweiofjowiejf wjefojw oefij woiejfoiwfjeiowjefoijw ijiowejfiowejfijwe fiojwfio wiofj iowfowejfojwefjwoefjiowejfo wioefj weiofjweoifiwoefjwioefjio weiofjwoifj iwoej wjefiojwfiowjfijweiof iejiofjwoew eoijffuck"
            img="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*TQQuSKwsCAqzxfe1KoJ3jg.png"
          />
        </BlogCardGroup>
      </div>
    </>
  );
}
