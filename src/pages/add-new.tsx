import Autocomplete from "@/components/Autocomplete/Autocomplete";
import { MainLayout } from "@/components/layouts/main";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import { createNewRestaurantAction } from "@/store/restaraunts/action";
import {
  Loader,
  Notification,
  Textarea,
} from "@mantine/core";
import {
  Button,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { useEffect, useState } from "react";
import { IconCheck, IconX } from "@tabler/icons-react";

export const AddNewItem = () => {
  const { restaraunts, status } = useAppSelector(
    (state) => state.restaraunts
  );
  const [notificationClosed, setNotificationClosed] =
    useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {}, [status]);
  const handleSumbit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (!Array.isArray(formValues.cuisines)) {
      formValues.cuisines = formValues.cuisines.split(
        ","
      ) as any;
    }
    if (!Array.isArray(formValues.dietaryRestrictions))
      formValues.dietaryRestrictions =
        formValues.dietaryRestrictions.split(",") as any;
    if (!Array.isArray(formValues.meals))
      formValues.meals = formValues.meals.split(",") as any;
    if (!Array.isArray(formValues.payment))
      formValues.payment = formValues.payment.split(
        ","
      ) as any;
    setNotificationClosed(false);
    dispatch(createNewRestaurantAction(formValues));
  };
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    if (name === "description" || name === "name") {
      setFormValues((prev) => ({
        ...prev,
        info: {
          ...prev.info,
          [name]: value,
        },
      }));
    } else
      setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const [formValues, setFormValues] = useState({
    averageCheck: 0,
    cuisines: "", //arr
    delivery: "no",
    dietaryRestrictions: "", //arr
    hasParking: false,
    hasWifi: false,
    meals: "", //arr
    openTime: "10:00-20:00",
    payment: "", //arr
    reservation: "no",
    status: "",
    statusReason: "",
    type: "Restaurant",
    website: "",
    info: {
      location: {
        id: 1,
      },
      name: "Kazakhstan",
      description: "description",
    },
    activated: false,
  });
  return (
    <MainLayout>
      <div style={{ padding: "20px 120px" }}>
        <h1>Create new Restaurant</h1>
        <form onSubmit={handleSumbit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "500px 500px",
              gap: "15px",
              marginTop: "30px",
            }}>
            <TextField
              id="name"
              type="text"
              name="name"
              size="small"
              // style={{ width: "60%", marginTop: "30px" }}
              label="name"
              onChange={handleChange}
            />
            <TextField
              id="description"
              type="text"
              name="description"
              size="small"
              // style={{ width: "60%" }}
              label="description"
              onChange={handleChange}
            />
            {/* <Autocomplete /> */}
            {/* <TextareaAutosize
              minRows={5}
              id="cuisines"
              name="cuisines"
              placeholder="Turkish,Korean,Chinese,Eastern,European,Caribbean,Thai,Indian,Japanese,Georgian,American"
              onChange={(event) => handleChange(event)}
            /> */}
            <TextField
              id="cuisines"
              type="text"
              name="cuisines"
              size="small"
              label="cuisines"
              placeholder="Turkish,Korean,Chinese,Eastern,European,Caribbean,Thai,Indian,Japanese,Georgian,American"
              onChange={handleChange}
            />
            <TextField
              id="avgCheck"
              type="text"
              name="averageCheck"
              size="small"
              // style={{ width: "60%" }}
              label="average check"
              onChange={handleChange}
            />
            <TextField
              id="dietRest"
              type="text"
              name="dietaryRestrictions"
              size="small"
              // style={{ width: "60%" }}
              label="dietary"
              onChange={handleChange}
              placeholder="Vegetarian,Vegan,Gluten-Free,Kosher"
            />
            <TextField
              id="delivery"
              type="text"
              name="delivery"
              size="small"
              style={{ width: "40%" }}
              label="delivery"
              placeholder="yes or no"
              onChange={handleChange}
            />
            <TextField
              id="meals"
              type="text"
              name="meals"
              size="small"
              // style={{ width: "60%" }}
              label="meals"
              onChange={handleChange}
              placeholder="Breakfast,Brunch,Lunch,Dinner"
            />
            <TextField
              id="openTime"
              type="text"
              name="openTime"
              size="small"
              // style={{ width: "60%" }}
              label="open time"
              onChange={handleChange}
            />
            <TextField
              id="payment"
              type="text"
              name="payment"
              size="small"
              // style={{ width: "60%" }}
              label="payment"
              placeholder="Cash,Credit Card,QR"
              onChange={handleChange}
            />
            <TextField
              id="reservation"
              type="text"
              name="reservation"
              size="small"
              style={{ width: "40%" }}
              label="reservation"
              placeholder="yes or no"
              onChange={handleChange}
            />
            <TextField
              id="status"
              type="text"
              name="status"
              size="small"
              // style={{ width: "60%" }}
              label="status"
              placeholder="Halal or Jaiz or Haram or Mushbooh"
              onChange={handleChange}
            />
            <TextField
              id="statusReason"
              type="text"
              name="statusReason"
              size="small"
              // style={{ width: "60%" }}
              label="status reason"
              onChange={handleChange}
            />
            <TextField
              id="type"
              type="text"
              name="type"
              size="small"
              // style={{ width: "60%" }}
              label="type"
              onChange={handleChange}
              placeholder="Restaurant|Cafe|Fast Food|Buffet"
            />
            <TextField
              id="website"
              type="text"
              name="website"
              size="small"
              // style={{ width: "60%" }}
              label="website"
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            onClick={() => setNotificationClosed(false)}
            size="medium"
            color="primary"
            variant="outlined"
            style={{ marginTop: "30px", width: "200px" }}>
            Create
            {status === "loading" && <Loader />}
          </Button>
          {status === "succeeded" &&
            !notificationClosed && (
              <Notification
                style={{ marginTop: "20px" }}
                icon={<IconCheck size="1.1rem" />}
                color="teal"
                onClose={() => setNotificationClosed(true)}
                title="Nice!">
                Place has been created
              </Notification>
            )}
        </form>
      </div>
    </MainLayout>
  );
};

export default AddNewItem;
