import { Card, List } from "antd";

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 7",
  },
  {
    title: "Title 8",
  },
  {
    title: "Title 9",
  },
  {
    title: "Title 10",
  },
  {
    title: "Title 11",
  },
  {
    title: "Title 12",
  },
  {
    title: "Title 13",
  },
  {
    title: "Title 14",
  },
  {
    title: "Title 15",
  },
];

function CourseItems() {
  return (
    <List
      className="w-100"
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 6,
      }}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 6,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.title}>
            Card content
          </Card>
        </List.Item>
      )}
    />
  );
}

export default CourseItems;
