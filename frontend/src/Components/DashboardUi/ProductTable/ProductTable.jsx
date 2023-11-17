import { Button, Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["S.No", "Name", "Catogary", "Publish Date", "Action"];

const TABLE_ROWS = [
    {
        sno : 1,
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        sno : 2,
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        sno : 3,
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        sno : 4,
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        sno : 5,
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];

function ProductTable() {
    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_ROWS.map(({ name, job, date }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                        return (
                            <tr key={name}>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {index+1}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {job}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {date}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        color="blue-gray"
                                        className="font-medium"
                                    >
                                        <Button className="text-red-400 border border-red-700 hover:text-gray-500">Delete</Button>
                                    </Typography>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}

export default ProductTable;