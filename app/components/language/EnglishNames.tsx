import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/design/ui/table";
import { Text, TextProps } from "@/design/ui/text";

const names = [
  ["Alʌt", "Aaron"],
  ["Á·kwilut", "Abraham"],
  ["Tsi’twʌlu", "Albert"],
  ["Tshyalé", "Charlie"],
  ["Tá·wet", "David"],
  ["Tysáts", "George"],
  ["Tshéle", "Jerry"],
  ["Sawatís", "John"],
  ["Kénniha", "Kenny"],
  ["Mathyu", "Matthew"],
  ["Niklas", "Nicholas"],
  ["Kwítel", "Peter"],
  ["Litsyet", "Richard"],
  ["Tu·wís", "Thomas"],
  ["Wílo", "William"],
  ["Klistí·n", ["Christine", "Kristin"]],
  ["Tsiló·s", "Delores"],
  [["Aliskwet", "Alísakwet"], "Elizabeth"],
  ["Katlí·n", "Katherine"],
  [["Kwáklit", "Kowáklit"], "Margret"],
  ["Mahtih", "Martha"],
  ["Wá·li", "Mary"],
  ["Ní·ki", ["Nellie", "Amelia"]],
  ["Lá·kel", "Rachel"],
  ["Sá·l", "Sara"],
  ["Só·s", "Susan"],
] as const;

export function EnglishNames() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>English</TableHead>
          <TableHead>Oneida</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {names.map((row, i) => (
          <TableRow key={i}>
            <TableCell>
              <TextArray>{row[1]}</TextArray>
            </TableCell>
            <TableCell>
              <TextArray>{row[0]}</TextArray>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function TextArray({ children, ...props }: TextProps) {
  if (!Array.isArray(children)) {
    return <Text {...props}>{children}</Text>;
  }
  return children.map((child, i) => (
    <Text {...props} key={i}>
      {child}
    </Text>
  ));
}
