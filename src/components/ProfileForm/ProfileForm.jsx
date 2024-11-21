import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useProfileData from "../../hooks/useProfileData";
import AvatarUploader from "./AvatarUploader/AvatarUploader";
import ErrorFormInput from "./FormInput/FormInput";
import FormTextArea from "./FormTextArea";
import FormRadio from "./FormRadio";
import FormList from "./FormList";
import ChengFormPopUp from "../../ui/ChengFormPopUp/ChengFormPopUp";
import FormButtons from "./FormButtons/FormButtons";
import styles from "./styles.module.css";
import LinkItems from "./LinkItems/LinkItems";

const ProfileForm = () => {
  const { formData, setFormData } = useProfileData();
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    mode: "onBlur",
    defaultValues: formData,
  });

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempScopes, setTempScopes] = useState(formData.scopes || []);
  const [tempInterests, setTempInterests] = useState(formData.interests || []);
  const [tempLinks, setTempLinks] = useState(formData.links || []);
  const [avatar, setAvatar] = useState(formData.avatar || null);

  useEffect(() => {
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
      setIsEditing(parsedData.visibility === "Private");
      setAvatar(parsedData.avatar);
    } else {
      setIsEditing(true);
    }
  }, [setFormData]);

  useEffect(() => {
    reset(formData);
  }, [formData, reset]);

  const onSave = async (data) => {
    await trigger();
    if (!isValid) return;
    try {
      const updatedData = {
        ...formData,
        ...data,
        avatar,
        scopes: tempScopes,
        interests: tempInterests,
        links: tempLinks,
      };
      setFormData(updatedData);
      localStorage.setItem("profileData", JSON.stringify(updatedData));
      setIsEditing(false);
      setIsPopUpVisible(true);
      setTimeout(() => setIsPopUpVisible(false), 2000);
    } catch (error) {
      console.error("Ошибка сохранения:", error);
    }
  };

  const onCancel = () => {
    reset(formData);
    setIsEditing(false);
  };

  const enableEditing = () => setIsEditing((prev) => !prev);

  const handleAvatarChange = (newAvatar) => {
    setAvatar(newAvatar);
    setValue("avatar", newAvatar);
  };

  const handleDeleteItem = (itemToDelete, listType) => {
    if (listType === "scopes") {
      setTempScopes((prev) => prev.filter((item) => item !== itemToDelete));
    } else if (listType === "interests") {
      setTempInterests((prev) => prev.filter((item) => item !== itemToDelete));
    } else if (listType === "links") {
      setTempLinks((prev) => prev.filter((item) => item !== itemToDelete));
    }
  };

  return (
    <div className={styles.form_container}>
      <AvatarUploader
        avatar={avatar}
        isEditing={isEditing}
        onAvatarChange={handleAvatarChange}
      />
      <form
        key={isEditing ? "editing" : "viewing"}
        onSubmit={handleSubmit(onSave)}
      >
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Name is required",
            minLength: { value: 2, message: "Minimum length is 2 characters" },
            maxLength: {
              value: 50,
              message: "Maximum length is 50 characters",
            },
          }}
          render={({ field }) => (
            <ErrorFormInput
              {...field}
              placeholder="Name"
              disabled={!isEditing}
              error={errors.name?.message}
            />
          )}
        />
        <Controller
          name="lastname"
          control={control}
          rules={{
            required: "Last name is required",
            minLength: { value: 2, message: "Minimum length is 2 characters" },
            maxLength: {
              value: 50,
              message: "Maximum length is 50 characters",
            },
          }}
          render={({ field }) => (
            <ErrorFormInput
              {...field}
              placeholder="Last Name"
              disabled={!isEditing}
              error={errors.lastname?.message}
            />
          )}
        />
        <Controller
          name="jobTitle"
          control={control}
          render={({ field }) => (
            <ErrorFormInput
              {...field}
              placeholder="Job Title"
              disabled={!isEditing}
              error={errors.jobTitle?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Phone is required",
            pattern: {
              value: /^\+\d{10,15}$/,
              message: "Invalid phone format",
            },
          }}
          render={({ field }) => (
            <ErrorFormInput
              {...field}
              placeholder="Phone"
              disabled={!isEditing}
              error={errors.phone?.message}
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <ErrorFormInput
              {...field}
              placeholder="Address"
              disabled={!isEditing}
              error={errors.address?.message}
            />
          )}
        />
        <Controller
          name="pitch"
          control={control}
          render={({ field }) => (
            <FormTextArea
              {...field}
              placeholder="Pitch"
              disabled={!isEditing}
              error={errors.pitch?.message}
            />
          )}
        />
        <Controller
          name="visibility"
          control={control}
          rules={{ required: "Visibility is required" }}
          render={({ field }) => (
            <FormRadio
              {...field}
              label="Show your profile in Launchpad?"
              options={["Private", "Public"]}
              disabled={!isEditing}
              error={errors.visibility?.message}
            />
          )}
        />
        <Controller
          name="scopes"
          control={control}
          render={({ field }) => (
            <FormList
              {...field}
              label="The scopes of your interest"
              items={tempScopes}
              onAddItem={(newItem) =>
                setTempScopes((prev) => [...prev, newItem])
              }
              disabled={!isEditing}
              onDeleteItem={(itemToDelete) =>
                handleDeleteItem(itemToDelete, "scopes")
              }
            />
          )}
        />
        <Controller
          name="interests"
          control={control}
          render={({ field }) => (
            <FormList
              {...field}
              label="Potential interests"
              items={tempInterests}
              onAddItem={(newItem) =>
                setTempInterests((prev) => [...prev, newItem])
              }
              disabled={!isEditing}
              onDeleteItem={(itemToDelete) =>
                handleDeleteItem(itemToDelete, "interests")
              }
            />
          )}
        />
        <Controller
          name="links"
          control={control}
          render={({ field }) => (
            <LinkItems
              {...field}
              label="Your links"
              items={tempLinks}
              onAddItem={(newItem) =>
                setTempLinks((prev) => [...prev, newItem])
              }
              disabled={!isEditing}
              onDeleteItem={(itemToDelete) =>
                handleDeleteItem(itemToDelete, "links")
              }
            />
          )}
        />
        <FormButtons
          isEditing={isEditing}
          onSave={handleSubmit(onSave)}
          onCancel={onCancel}
          enableEditing={enableEditing}
        />
      </form>
      {isPopUpVisible && <ChengFormPopUp />}
    </div>
  );
};

export default ProfileForm;
