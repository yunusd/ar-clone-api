module.exports = async (...args) => {
    const [, params, context, ] = args;
    const contents = await context.models.ServiceContent.findAll({
        where: {
            serviceId: params.serviceId
        },
        include: {
            model: context.models.Question,
            as: "question"
        },
        include: {
            model: context.models.QuestionOption,
            as: "questionOption"
        }
    });
    return contents;
};