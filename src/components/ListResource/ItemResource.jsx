export default function ItemResource({ index, img, name, catigory, url }) {
  return (
    <li className="border rounded-2xl duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_1px_#23d59c]">
      <a className="p-2.5 flex items-center gap-2.5" href={url} target="_blank">
        <img src={img} alt={name} width={40} className="shrink-0"/>
        <p className="flex flex-col gap-1">
          <span className="text-xl/[100%] max-md:text-lg/[100%]">{name}</span>
          <span className="text-sm max-md:text-xs">
            {index}-{catigory}
          </span>
        </p>
      </a>
    </li>
  );
}
