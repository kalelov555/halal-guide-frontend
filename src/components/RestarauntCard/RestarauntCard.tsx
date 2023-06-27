import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import { updateRestarauntAction } from "@/store/restaraunts/action";
import { RestarauntApi } from "@/typings/restaraunts";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Modal,
  Checkbox,
  Notification,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Key, useState } from "react";

type Props = {
  restaraunt: RestarauntApi;
};

const HALAL = "Halal";
const JAIZ = "Jaiz";
const MUSHBOOH = "Mushbooh";
const HARAM = "Haram";

export const RestarauntCard = ({ restaraunt }: Props) => {
  let color = "";
  const [opened, { open, close }] = useDisclosure(false);

  const [checked, setChecked] = useState(
    restaraunt.hasParking
  );

  const [notificationClosed, setNotificationClosed] =
    useState(false);

  const dispatch = useAppDispatch();

  const { updatingStatus } = useAppSelector(
    (state) => state.restaraunts
  );

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setNotificationClosed(false);
    dispatch(
      updateRestarauntAction({
        ...restaraunt,
        hasParking: checked,
      })
    );
  };

  if (restaraunt.status === HALAL) color = "green";
  else if (restaraunt.status === JAIZ) color = "indigo";
  else if (restaraunt.status === MUSHBOOH) color = "orange";
  else if (restaraunt.status === HARAM) color = "red";

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      key={restaraunt.id as Key}>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{restaraunt.info.name}</Text>
        <Badge color={color} variant="light">
          {restaraunt.status}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {restaraunt.info.description}
      </Text>

      <Modal
        key={restaraunt.info.name as Key}
        opened={opened}
        onClose={close}
        title="Details">
        <div>
          <Text
            tt="capitalize"
            size="md"
            color="dimmed"
            variant="gradient"
            gradient={{
              from: "indigo",
              to: "cyan",
              deg: 45,
            }}
            sx={{
              fontFamily: "Greycliff CF, sans-serif",
            }}
            fw={700}>
            <span style={{ fontWeight: "bold" }}>
              {"name"} :
            </span>
            {" " + restaraunt.info.name}
          </Text>
          <Text
            tt="capitalize"
            size="md"
            color="dimmed"
            variant="gradient"
            gradient={{
              from: "indigo",
              to: "cyan",
              deg: 45,
            }}
            sx={{
              fontFamily: "Greycliff CF, sans-serif",
            }}
            fw={700}>
            <span style={{ fontWeight: "bold" }}>
              {"description"} :
            </span>
            {" " + restaraunt.info.description}
          </Text>
          {Object.entries(restaraunt).map(
            ([key, value]) => {
              if (key === "info" || key === "id")
                return <></>;
              else if (
                key === "createdAt" ||
                key === "updatedAt"
              )
                return <></>;
              else if (Array.isArray(value)) {
                return (
                  <Text
                    tt="capitalize"
                    size="md"
                    color="dimmed"
                    variant="gradient"
                    gradient={{
                      from: "indigo",
                      to: "cyan",
                      deg: 45,
                    }}
                    sx={{
                      fontFamily:
                        "Greycliff CF, sans-serif",
                    }}
                    fw={700}>
                    <span style={{ fontWeight: "bold" }}>
                      {key} :
                    </span>
                    {" " + value.toString()}
                  </Text>
                );
              }
              return (
                <Text
                  tt="capitalize"
                  size="md"
                  color="dimmed"
                  variant="gradient"
                  gradient={{
                    from: "indigo",
                    to: "cyan",
                    deg: 45,
                  }}
                  sx={{
                    fontFamily: "Greycliff CF, sans-serif",
                  }}
                  fw={700}>
                  <span style={{ fontWeight: "bold" }}>
                    {key} :
                  </span>
                  {" " + value}
                </Text>
              );
            }
          )}
        </div>

        <div style={{ marginTop: "20px" }}>
          <form
            style={{
              display: "flex",
              gap: "15px",
              alignContent: "center",
            }}
            onSubmit={handleSubmit}>
            <Checkbox
              checked={checked as boolean}
              onChange={(event) =>
                setChecked(event.currentTarget.checked)
              }
              label="Activate"
              name="hasParking"
              value={String(checked)}
            />

            <Button
              type="submit"
              variant="light"
              color="blue"
              loading={updatingStatus === "loading"}>
              Update
            </Button>
          </form>
          {updatingStatus === "succeeded" &&
            !notificationClosed && (
              <Notification
                style={{ marginTop: "20px" }}
                title="Nice!"
                color="green"
                onClose={() => setNotificationClosed(true)}>
                Successfully updated
              </Notification>
            )}
        </div>
      </Modal>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={open}>
        View Details
      </Button>
    </Card>
  );
};
