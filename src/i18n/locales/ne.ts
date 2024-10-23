import type { LanguageMetadata, LanguageTranslation } from '../types';

export const ne: LanguageTranslation = {
    translation: {
        menu: {
            file: {
                file: 'फाइल',
                new: 'नयाँ',
                open: 'खोल्नुहोस्',
                save: 'सुरक्षित गर्नुहोस्',
                import_database: 'डेटाबेस आयात गर्नुहोस्',
                export_sql: 'SQL निर्यात गर्नुहोस्',
                export_as: 'यस रूपमा निर्यात गर्नुहोस्',
                delete_diagram: 'आरेख हटाउनुहोस्',
                exit: 'निस्कनुहोस्',
            },
            edit: {
                edit: 'सम्पादन गर्नुहोस्',
                undo: 'पूर्ववत गर्नुहोस्',
                redo: 'पुन: गर्नुहोस्',
                clear: 'खाली गर्नुहोस्',
            },
            view: {
                view: 'हेर्नुहोस्',
                show_sidebar: 'साइडबार देखाउनुहोस्',
                hide_sidebar: 'साइडबार लुकाउनुहोस्',
                hide_cardinality: 'कार्डिनालिटी लुकाउनुहोस्',
                show_cardinality: 'कार्डिनालिटी देखाउनुहोस्',
                zoom_on_scroll: 'स्क्रोल गर्दा जुम गर्नुहोस्',
                theme: 'थीम',
                change_language: 'भाषा परिवर्तन गर्नुहोस्',
                show_dependencies: 'निर्भरता देखाउनुहोस्',
                hide_dependencies: 'निर्भरता लुकाउनुहोस्',
            },
            help: {
                help: 'मद्दत',
                visit_website: 'ChartDB वेबसाइट भ्रमण गर्नुहोस्',
                join_discord: 'हाम्रो डिस्कर्ड मा जोडिनुहोस',
                schedule_a_call: 'हामीसँग कलमा कुरा गर्नुहोस्!',
            },
        },

        delete_diagram_alert: {
            title: 'आरेख हटाउनुहोस्',
            description:
                'यो कार्य पूर्ववत गर्न सकिदैन। यो आरेख स्थायी रूपमा हटाइनेछ।',
            cancel: 'रद्द गर्नुहोस्',
            delete: 'हटाउनुहोस्',
        },

        clear_diagram_alert: {
            title: 'आरेख खाली गर्नुहोस्',
            description:
                'यो कार्य पूर्ववत गर्न सकिदैन। यो आरेखमा सबै डेटा स्थायी रूपमा हटाइनेछ।',
            cancel: 'रद्द गर्नुहोस्',
            clear: 'खाली गर्नुहोस्',
        },

        reorder_diagram_alert: {
            title: 'आरेख पुन: क्रमबद्ध गर्नुहोस्',
            description:
                'यो कार्य आरेखमा सबै तालिकाहरू पुन: क्रमबद्ध गर्नेछ। के तपाईँ जारी राख्न चाहनुहुन्छ?',
            reorder: 'पुन: क्रमबद्ध गर्नुहोस्',
            cancel: 'रद्द गर्नुहोस्',
        },

        multiple_schemas_alert: {
            title: 'धेरै स्कीमा',
            description:
                '{{schemasCount}} स्कीमा यो आरेखमा छन्। हाल देखाइएको: {{formattedSchemas}}।',
            dont_show_again: 'फेरि नदेखाउनुहोस्',
            change_schema: 'परिवर्तन गर्नुहोस्',
            none: 'कुनै छैन',
        },

        theme: {
            system: 'सिस्टम',
            light: 'हल्का',
            dark: 'गाढा',
        },

        zoom: {
            on: 'चालु',
            off: 'बन्द',
        },

        last_saved: 'अन्तिम सुरक्षित',
        saved: 'सुरक्षित गरियो',
        diagrams: 'आरेखहरू',
        loading_diagram: 'आरेख लोड हुँदैछ...',
        deselect_all: 'सबैलाई अचयनित गर्नुहोस्',
        select_all: 'सबैलाई चयन गर्नुहोस्',
        clear: 'खाली गर्नुहोस्',
        show_more: 'थप देखाउनुहोस्',
        show_less: 'कम देखाउनुहोस्',
        copy_to_clipboard: 'क्लिपबोर्डमा प्रतिलिपि गर्नुहोस्',
        copied: 'प्रतिलिपि गरियो!',

        side_panel: {
            schema: 'स्कीमा:',
            filter_by_schema: 'स्कीमाद्वारा फिल्टर गर्नुहोस्',
            search_schema: 'स्कीमा खोज्नुहोस्...',
            no_schemas_found: 'कुनै स्कीमा फेला परेन।',
            view_all_options: 'सबै विकल्पहरू हेर्नुहोस्...',
            tables_section: {
                tables: 'तालिकाहरू',
                add_table: 'तालिका थप्नुहोस्',
                filter: 'फिल्टर गर्नुहोस्',
                collapse: 'सबैलाई संक्षिप्त गर्नुहोस्',

                table: {
                    fields: 'क्षेत्रहरू',
                    nullable: 'नलेबल?',
                    primary_key: 'मुख्य कुञ्जी',
                    indexes: 'सूचकांकहरू',
                    comments: 'टिप्पणीहरू',
                    no_comments: 'कुनै टिप्पणी छैन',
                    add_field: 'क्षेत्र थप्नुहोस्',
                    add_index: 'सूचकांक थप्नुहोस्',
                    index_select_fields: 'क्षेत्रहरू चयन गर्नुहोस्',
                    no_types_found: 'कुनै प्रकार फेला परेन',
                    field_name: 'नाम',
                    field_type: 'प्रकार',
                    field_actions: {
                        title: 'क्षेत्र गुणहरू',
                        unique: 'अद्वितीय',
                        comments: 'टिप्पणीहरू',
                        no_comments: 'कुनै टिप्पणी छैन',
                        delete_field: 'क्षेत्र हटाउनुहोस्',
                    },
                    index_actions: {
                        title: 'सूचकांक गुणहरू',
                        name: 'नाम',
                        unique: 'अद्वितीय',
                        delete_index: 'सूचकांक हटाउनुहोस्',
                    },
                    table_actions: {
                        title: 'तालिका कार्यहरू',
                        change_schema: 'स्कीमा परिवर्तन गर्नुहोस्',
                        add_field: 'क्षेत्र थप्नुहोस्',
                        add_index: 'सूचकांक थप्नुहोस्',
                        delete_table: 'तालिका हटाउनुहोस्',
                    },
                },
                empty_state: {
                    title: 'कुनै तालिकाहरू छैनन्',
                    description: 'सुरु गर्न तालिका बनाउनुहोस्',
                },
            },
            relationships_section: {
                relationships: 'सम्बन्धहरू',
                filter: 'फिल्टर गर्नुहोस्',
                add_relationship: 'सम्बन्ध थप्नुहोस्',
                collapse: 'सबैलाई संक्षिप्त गर्नुहोस्',
                relationship: {
                    primary: 'मुख्य तालिका',
                    foreign: 'सन्दर्भ तालिका',
                    cardinality: 'कार्डिनालिटी',
                    delete_relationship: 'हटाउनुहोस्',
                    relationship_actions: {
                        title: 'कार्यहरू',
                        delete_relationship: 'हटाउनुहोस्',
                    },
                },
                empty_state: {
                    title: 'कुनै सम्बन्धहरू छैनन्',
                    description:
                        'तालिकाहरू जडान गर्न सम्बन्ध बनाउनुहोस्',
                },
            },
            dependencies_section: {
                dependencies: 'निर्भरता',
                filter: 'फिल्टर गर्नुहोस्',
                collapse: 'संक्षिप्त गर्नुहोस्',
                dependency: {
                    table: 'तालिका',
                    dependent_table: 'निर्भर तालिका',
                    delete_dependency: 'निर्भरता हटाउनुहोस्',
                    dependency_actions: {
                        title: 'कार्यहरू',
                        delete_dependency: 'निर्भरता हटाउनुहोस्',
                    },
                },
                empty_state: {
                    title: 'कुनै निर्भरता छैन',
                    description: 'यस खण्डमा कुनै निर्भरता उपलब्ध छैन।',
                },
            },
        },

        toolbar: {
            zoom_in: 'जुम इन गर्नुहोस्',
            zoom_out: 'जुम आउट गर्नुहोस्',
            save: 'सुरक्षित गर्नुहोस्',
            show_all: 'सबै देखाउनुहोस्',
            undo: 'पूर्ववत गर्नुहोस्',
            redo: 'पुन: गर्नुहोस्',
            reorder_diagram: 'आरेख पुन: क्रमबद्ध गर्नुहोस्',
            highlight_overlapping_tables: 'ओभरल्याप गर्ने तालिकाहरू हाइलाइट गर्नुहोस्',
        },

        new_diagram_dialog: {
            database_selection: {
                title: 'तपाईंको डेटाबेस के हो?',
                description:
                    'प्रत्येक डेटाबेसका आफ्नै अद्वितीय विशेषताहरू र क्षमताहरू हुन्छन्।',
                check_examples_long: 'उदाहरणहरू हेर्नुहोस्',
                check_examples_short: 'उदाहरण',
            },

            import_database: {
                title: 'तपाईंको डेटाबेस आयात गर्नुहोस्',
                database_edition: 'डेटाबेस संस्करण:',
                step_1: 'तपाईंको डेटाबेसमा यो स्क्रिप्ट चलाउनुहोस्:',
                step_2: 'यहाँ स्क्रिप्टको परिणाम पेस्ट गर्नुहोस्:',
                script_results_placeholder: 'यहाँ स्क्रिप्टको परिणाम...',
                ssms_instructions: {
                    button_text: 'SSMS निर्देशनहरू',
                    title: 'निर्देशनहरू',
                    step_1: 'टूल्स > अप्शनहरू > क्वेरी परिणामहरू > SQL सर्वरमा जानुहोस्।',
                    step_2: 'यदि तपाईं "ग्रिडमा परिणाम" प्रयोग गर्दै हुनुहुन्छ भने, Non-XML डेटाका लागि अधिकतम वर्ण पुन: प्राप्ति (९९९९९९९ मा सेट गर्नुहोस्)।',
                },
                instructions_link: 'मद्दत चाहिन्छ? हेर्नुहोस् कसरी',
                check_script_result: 'स्क्रिप्ट परिणाम जाँच्नुहोस्',
            },

            cancel: 'रद्द गर्नुहोस्',
            back: 'फर्कनुहोस्',
            empty_diagram: 'खाली आरेख सुरु गर्नुहोस्',
            error: 'त्रुटि',
            errors: {
                unable_to_load: 'त्रुटि: स्क्रिप्टको परिणाम लोड गर्न असमर्थ',
                unsupported_database:
                    'त्रुटि: डेटाबेस संस्करण हाल समर्थन गरिएको छैन',
            },
        },

        undo_redo_alert: {
            title: 'पूर्ववत गर्नुहोस् / पुन: गर्नुहोस्',
            description:
                'यस कार्यले तलको सूचीमा सबै परिवर्तनहरू पूर्ववत / पुन: गर्नेछ। के तपाईँ जारी राख्न चाहनुहुन्छ?',
            undo: 'पूर्ववत गर्नुहोस्',
            redo: 'पुन: गर्नुहोस्',
            cancel: 'रद्द गर्नुहोस्',
        },

        tooltip: {
            copy_to_clipboard: 'क्लिपबोर्डमा प्रतिलिपि गर्नुहोस्',
            add_table: 'तालिका थप्नुहोस्',
            reorder_diagram: 'आरेख पुन: क्रमबद्ध गर्नुहोस्',
            delete_table: 'तालिका हटाउनुहोस्',
        },
    },
};

export const metadata: LanguageMetadata = {
    language: 'Nepali',
};
