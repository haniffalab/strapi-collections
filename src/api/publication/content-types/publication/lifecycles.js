module.exports = {

    afterCreate(event){
        const { result, params } = event;
        pub_id = result.id;

        // Add publication id to each author's publications
        result.authors.forEach(async author => {
            if (author.author != null){
                let res = await strapi.entityService.findOne('api::author.author', author.author.id, {
                    fields: ['name'],
                    populate: ['publications']
                });
                let pubs = new Set(res.publications.map(p => p.id));
                pubs.add(pub_id);
                res = await strapi.entityService.update('api::author.author', author.author.id, {
                    data: {
                        publications: Array.from(pubs)
                    }
                });
                // console.log(res)
            }
        });
    },

    afterUpdate(event){
        const { result, params } = event;
        pub_id = result.id;

        // Add publication id to each author's publications
        result.authors.forEach(async author => {
            if (author.author != null){
                let res = await strapi.entityService.findOne('api::author.author', author.author.id, {
                    fields: ['name'],
                    populate: ['publications']
                });
                let pubs = new Set(res.publications.map(p => p.id));
                pubs.add(pub_id);
                res = await strapi.entityService.update('api::author.author', author.author.id, {
                    data: {
                        publications: Array.from(pubs)
                    }
                });
                // console.log(res)
            }
        });
    },

};