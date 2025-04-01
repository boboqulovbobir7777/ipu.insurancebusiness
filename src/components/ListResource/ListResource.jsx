import Wrapper from "../Wrapper/Wrapper";
import ItemResource from "./ItemResource";

export default function ListResource({ resource, img }) {
  return (
    <section className="mb-20" id="resource">
      <Wrapper>
        <ul className="flex flex-col gap-5">
          {resource.items.map((e) => (
            <ItemResource
              key={e.id}
              img={img}
              name={e.name}
              index={e.id}
              catigory={resource.catigory}
              url={e.url}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
