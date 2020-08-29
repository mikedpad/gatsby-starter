function getData(status) {
  return { "data-activelink": status };
}

const [_EXACT, _PARTIAL, _INACTIVE] = [
  getData(`exact`),
  getData(`partial`),
  getData(`inactive`),
];

export default ({ href, location }) => {
  const { pathname } = location;
  const trimmedPath = pathname.replace(/\/$/, ``);

  // Link href exactly matches current path
  const isExactMatch = trimmedPath === href || pathname === href;
  if (isExactMatch) return _EXACT;

  // Link href partially matches current path
  const isHomeLink = href === `/`;
  const isPartial = trimmedPath.startsWith(href);
  if (!isHomeLink && isPartial) return _PARTIAL;

  // Link href matches nothing
  return _INACTIVE;
};
