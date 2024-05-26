addNotification(
    {
        title: "Title", 
        description: "Description",
        text: "Text",
        status: "success" || "failed" || "warning",
        background: "purple" || "#800080",
        color: "white" || "#FFFFFF",
        icon: "✅" || <FaCheckCircle />,
        duration : '5s', // Default is 5s
        iconColor: "white" || "#FFFFFF",
        textsColor: "white" || "#FFFFFF",
        titleColor: "white" || "#FFFFFF",
        textColor: "white" || "#FFFFFF",
        descriptionColor: "white" || "#FFFFFF",
        fixed: true, // If true, the notification remains fixed and does not automatically clear
        progressColor: "gray" || "#808080",
        closeButtonRotate: true, // If true, the close button rotates on hover
    }
);