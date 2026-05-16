(function () {
  const storageKey = "greyAreaCommonsDrafts";
  const visibilityOptions = [
    ["public", "Public"],
    ["trusted_only", "Trusted-only"],
    ["match_only", "Match-only"],
    ["private", "Private"],
    ["never_publish", "Never publish"]
  ];

  const builders = {
    basicAura: {
      title: "Ease In",
      schema: "grey_area_commons.basic_aura_profile.v0",
      filename: "basic-aura-profile.md",
      intro: "A gentle first room for lowering pressure. Name only the pieces of yourself that feel easy enough to carry into a loving connection conversation.",
      sections: [
        {
          title: "Arriving Softly",
          fields: [
            {
              type: "singleCheck",
              name: "adult_confirmed",
              label: "I confirm I am an adult and this draft is for lawful, consent-led connection only.",
              markdownLabel: "Adult-only confirmation"
            },
            { type: "text", name: "display_name", label: "What name feels comfortable here?", hint: "A real name, nickname, handle, temporary name, or something softer for now?" },
            { type: "text", name: "place_band", label: "Where are you connecting from or toward?", hint: "Local, nearby, online-first, travelling, further away, returning home, or not sure?" },
            {
              type: "select",
              name: "default_visibility",
              label: "What pace would make this feel less anxious?",
              hint: "A pace that protects your nervous system?",
              options: [
                ["slow_and_gentle", "Slow and gentle"],
                ["friendly_first", "Friendly first"],
                ["clear_but_warm", "Clear but warm"],
                ["playful_with_boundaries", "Playful with boundaries"],
                ["not_sure_yet", "Not sure yet"]
              ]
            },
            { type: "textarea", name: "public_signal", label: "What would help you feel safe enough to begin?", hint: "A kind first message, no pressure to reply, shared humour, clear intentions, a public setting, a trusted intro, time to think, or something else?" }
          ]
        },
        {
          title: "Warmth and Recognition",
          fields: [
            { type: "textarea", name: "similar_humanity", label: "What parts of shared humanity make you soften?", hint: "Kindness, curiosity, music, humour, grief, faith, play, care, making things, learning, resilience, sensuality, service, quietness, or courage?" },
            { type: "textarea", name: "diversity_welcome", label: "What kinds of difference could feel beautiful, not frightening?", hint: "Distance, culture, language, age within legal adult limits, neurotype, body, gender, sexuality, spirituality, class, ability, relationship shape, or life path?" },
            { type: "textarea", name: "abundance_values", label: "What does joyful responsible abundance feel like in intimacy?", hint: "More time, more honesty, more kindness, more play, more care, more patience, more mutual thriving, or more room to be real?" }
          ]
        },
        {
          title: "Soft Edges",
          fields: [
            { type: "textarea", name: "private_edges", label: "What is not ready to be touched yet?", hint: "History, vulnerability, attraction, identity, health, family, money, exact location, body, grief, trauma, private longing, or anything that needs time?" },
            { type: "textarea", name: "open_questions", label: "What would a kind person ask before going deeper?", hint: "Questions that would make breathing easier rather than freezing up?" }
          ]
        }
      ]
    },
    permissions: {
      title: "Sharing Layers",
      schema: "grey_area_commons.permissions.v0",
      filename: "self-managed-permissions.md",
      intro: "A softer sharing map. The aim is not to hide everything; it is to let closeness grow without anyone feeling overexposed.",
      sections: [
        {
          title: "Comfort Layers",
          fields: [
            { type: "textarea", name: "public_allowed", label: "What feels easy to share?", hint: "Light, public-safe signals that would not make anxiety spike if someone saw them?" },
            { type: "textarea", name: "trusted_only", label: "What needs some trust first?", hint: "Things a known person or chosen helper might understand after context is clear?" },
            { type: "textarea", name: "match_only", label: "What only belongs inside mutual yes?", hint: "Desires, attraction, tenderness, deeper hope, body language, private invitations, or anything that needs reciprocal interest?" },
            { type: "textarea", name: "private_only", label: "What is only for your own clarity?", hint: "For self-understanding or private AI reflection, but not for anyone else yet?" },
            { type: "textarea", name: "never_publish", label: "What must never become a public clue?", hint: "Anything that could expose identity, vulnerability, longing, trauma, health, location, family, money, or intimate context?" }
          ]
        },
        {
          title: "Ask First Moments",
          fields: [
            {
              type: "checkboxes",
              name: "ask_first_rules",
              label: "Ask me before",
              options: [
                ["sharing_identity", "Sharing my identity or contact path"],
                ["using_images", "Using my image, voice, avatar or likeness"],
                ["making_introduction", "Making a direct introduction"],
                ["summarising_sensitive", "Summarising something tender or sensitive"],
                ["moving_to_public", "Moving something trusted into public view"],
                ["agent_matching", "Using AI to compare or match me with someone"]
              ]
            },
            {
              type: "radio",
              name: "revocation_style",
              label: "If I get anxious or change my mind, the response should be",
              options: [
                ["immediate", "Pause immediately"],
                ["reviewed_with_helper", "Check with a trusted helper"],
                ["case_by_case", "Slow down case by case"],
                ["not_sure", "Not sure yet"]
              ]
            },
            { type: "textarea", name: "human_review", label: "Who helps you feel safer with sensitive choices?", hint: "A friend, elder, carer, therapist, community member, chosen helper, or simply yourself after more time?" }
          ]
        }
      ]
    },
    connections: {
      title: "Loving Questions",
      schema: "grey_area_commons.connection_questions.v0",
      filename: "connection-questions.md",
      intro: "A non-explicit question path for loving intimate connection. The purpose is to reduce anxiety, make warmth easier, and protect mutual choice.",
      sections: [
        {
          title: "How Closeness Can Begin",
          fields: [
            {
              type: "singleCheck",
              name: "adult_lawful_confirmed",
              label: "I confirm this connection map is adult-only, lawful, voluntary and non-coercive.",
              markdownLabel: "Adult-only lawful confirmation"
            },
            {
              type: "checkboxes",
              name: "connection_modes",
              label: "What kinds of loving connection could feel nourishing?",
              options: [
                ["friendship", "Friendship with emotional honesty"],
                ["creative", "Creative or musical collaboration"],
                ["spiritual", "Spiritual, reflective or meaning-rich conversation"],
                ["romantic", "Romantic possibility"],
                ["intimacy_adjacent", "Intimacy-adjacent trust without public detail"],
                ["travel_distance", "Further-away connection or travel possibility"],
                ["community_hosting", "Events, circles or community hosting"]
              ]
            },
            {
              type: "select",
              name: "pace",
              label: "What pace makes loving connection easier?",
              options: [
                ["slow_questions_first", "Slow questions first"],
                ["friendly_then_deeper", "Friendly warmth, then deeper"],
                ["clear_invitation", "Clear invitation before depth"],
                ["body_and_words_both", "Body language and words both need to agree"],
                ["context_dependent", "Context dependent"],
                ["not_sure", "Not sure yet"]
              ]
            },
            { type: "textarea", name: "what_feels_safe", label: "What would make the first step feel less anxious?", hint: "A small message, shared activity, trusted intro, no pressure, direct words, humour, a public setting, a slow voice, time to reply, or permission to pause?" }
          ]
        },
        {
          title: "Signals That Help",
          fields: [
            { type: "textarea", name: "green_flags", label: "What makes you relax and open?", hint: "Care, maturity, humour, patience, mutual curiosity, clean boundaries, consent, reliability, spiritual resonance, playfulness, or shared values?" },
            { type: "textarea", name: "yellow_flags", label: "What means slow down, but not necessarily stop?", hint: "Mixed signals, intensity, distance, life complexity, nervousness, unclear availability, cultural difference, or needing a better context?" },
            { type: "textarea", name: "red_lines", label: "What is a clear stop?", hint: "Anything illegal, coercive, unsafe, manipulative, non-consensual, involving minors, privacy-breaking, cruel, dishonest, or against your values?" },
            { type: "textarea", name: "distance_diversity", label: "How can distance and difference be held gently?", hint: "Further away, very different backgrounds, online-first connection, travel, language, culture, disability, neurotype, relationship style, or spiritual worldview?" }
          ]
        },
        {
          title: "Questions That Deepen Without Pushing",
          fields: [
            { type: "textarea", name: "deeper_questions", label: "What questions would help trust grow?", hint: "Love, care, body, spirit, history, attachment, fear, joy, or longing in ways that allow no, maybe, later, or not public?" },
            { type: "textarea", name: "not_for_public", label: "What should never be turned into a public hint?", hint: "Anything that would make the person feel exposed, teased, hunted, reduced, pressured, or misunderstood?" }
          ]
        }
      ]
    },
    clinicalPathway: {
      title: "Memory, Love and Intimacy",
      schema: "grey_area_commons.memory_intimacy_pathway.v4",
      filename: "memory-intimacy-pathway.md",
      intro: "A softer self-reflection path for adults exploring loving connection while memory questions, dementia concerns, family history of memory-related decline, care or changing capacity may be somewhere in the background. It does not assume diagnosis, relationship status or support needs.",
      sections: [
        {
          title: "Quiet Starting Point",
          fields: [
            { type: "textarea", name: "why_here", label: "What am I trying to understand about connection right now?", hint: "Closeness, distance, attraction, trust, memory worries, family history, care, partnership, dating, or having no clear words yet?" },
            { type: "textarea", name: "answering_context", label: "What would help me answer without feeling watched, judged or rushed?", hint: "Privacy, time, simpler words, humour, quiet, a trusted person, no helper, taking breaks, or leaving hard parts blank?" },
            { type: "textarea", name: "trusted_support_optional", label: "If someone is helping, what do I want their role to be?", hint: "Sitting with me, helping me read the questions, typing exactly what I say, reminding me I can skip anything, or stepping away when I want privacy?" }
          ]
        },
        {
          title: "Preferences For Connection",
          fields: [
            { type: "textarea", name: "wanted_connection", label: "What kinds of connection feel nourishing, possible or worth wondering about?", hint: "Companionship, friendship, romance, flirting, sensuality, cuddling, shared silence, humour, spiritual closeness, creative play, practical care, or simply being near someone?" },
            { type: "textarea", name: "not_wanted_or_not_clear", label: "What feels unwanted, unclear, too fast or not for now?", hint: "Touch, disclosure, pressure to decide, family involvement, public labels, private meetings, sex, dating, caregiving, AI interpretation, or anything that needs more time?" },
            { type: "textarea", name: "asking_consent", label: "How do I like consent, comfort or willingness to be checked?", hint: "Specific words, yes/no/maybe options, gentle repetition, written notes, body cues, asking later, asking privately, or a trusted person helping slow the moment?" },
            { type: "textarea", name: "safe_no", label: "What helps a no, maybe, later or I do not know feel respected?", hint: "No persuasion, no sulking, no public embarrassment, a graceful pause, changing topic, staying kind, or ending the conversation cleanly?" }
          ]
        },
        {
          title: "Memory, Change and Family Story",
          fields: [
            { type: "textarea", name: "memory_context", label: "If memory-related change is part of my life or family story, what do I want held gently?", hint: "A family pattern, a personal worry, a diagnosis, no diagnosis, uncertainty, grief, hope, recovery, fear of being assumed about, or nothing that needs naming yet?" },
            { type: "textarea", name: "still_me", label: "What do I want people to remember is still me?", hint: "Humour, sexuality, faith, culture, stubbornness, tenderness, beauty, privacy, playfulness, intelligence, grief, desire, ordinary preferences, or changing needs?" },
            { type: "textarea", name: "future_self", label: "What would future me want protected if memory or confidence changed?", hint: "Dignity, privacy, slow consent, not being infantilised, not being rushed, not being exposed, chosen relationships, body boundaries, joy, or the right to pause?" },
            { type: "textarea", name: "signals_for_support", label: "What signs might mean I need more time, simpler words or trusted support?", hint: "Confusion, distress, people disagreeing, feeling pressured, forgetting a choice, not recognising context, fatigue, fear, silence, or wanting someone safe nearby?" }
          ]
        },
        {
          title: "Trusted Support, If Wanted",
          fields: [
            { type: "textarea", name: "support_people", label: "Who, if anyone, may help me make sense of this?", hint: "No one, a partner, friend, family member, trusted carer, counsellor, advocate, clinician, community elder, chosen family, or someone I have not chosen yet?" },
            { type: "textarea", name: "helper_do", label: "What should a trusted helper do?", hint: "Listening, slowing down, asking simple questions, writing exactly what I say, checking comfort, helping me leave, reminding me of my values, or protecting privacy?" },
            { type: "textarea", name: "helper_not_do", label: "What should a trusted helper not do?", hint: "Deciding for me, rushing, teasing, translating my words into their agenda, sharing it, assuming desire, minimising me, or turning uncertainty into permission?" },
            { type: "textarea", name: "professional_or_emergency", label: "When should this leave the private reflection space and go to proper human support?", hint: "Safety, coercion, abuse, exploitation, serious distress, medical concern, legal capacity, money pressure, emergency, or any intimacy that feels uncertain or unsafe?" }
          ]
        },
        {
          title: "Sharing and Privacy",
          fields: [
            { type: "textarea", name: "share_with_one", label: "What could I share with one trusted person, if anything?", hint: "A feeling, a preference, a worry, a boundary, a question, a request for patience, or nothing yet?" },
            { type: "textarea", name: "private_unless_asked_again", label: "What should stay private unless I choose again later?", hint: "Health, memory worries, family history, attraction, sexual preferences, body boundaries, relationship context, grief, location, money, names, or anything still forming?" },
            { type: "textarea", name: "never_public_or_ai", label: "What should never be made public or fed into AI as context?", hint: "Anything that could expose diagnosis, risk, longing, identity, relationship details, vulnerability, exact place, family conflict, consent uncertainty, or private trust?" },
            { type: "textarea", name: "public_words_if_any", label: "What public words, if any, could invite connection without revealing me?", hint: "A general invitation, listening circle, arts night, care table, question, community event, or no public words at all?" }
          ]
        }
      ]
    },
    noticeboards: {
      title: "Public Bridge",
      schema: "grey_area_commons.commons_connection_bridge.v2",
      filename: "commons-connection-bridge.md",
      intro: "An owner-controlled bridge for people seeking connection after self-reflection. The person keeps their own .md files and chooses which pieces, if any, can become a low-pressure commons signal.",
      sections: [
        {
          title: "Connection Signal",
          fields: [
            { type: "text", name: "bridge_title", label: "What simple public title could lower the barrier to connection?", hint: "Warm, plain, non-revealing words that make a kind first step easier without explaining everything?" },
            {
              type: "checkboxes",
              name: "connection_openings",
              label: "What kinds of connection could this bridge invite?",
              options: [
                ["conversation", "Conversation"],
                ["friendship", "Friendship"],
                ["companionship", "Companionship"],
                ["romance", "Romance"],
                ["shared_interest", "Shared interest or activity"],
                ["creative_collaboration", "Creative collaboration"],
                ["community_support", "Community support"],
                ["trusted_introduction", "Trusted introduction"]
              ]
            },
            { type: "textarea", name: "public_signal", label: "What can I choose to say publicly without making the private reflection public?", hint: "A gentle invitation, shared value, activity, question, interest, location level, availability window, or a simple openness to hear from someone?" },
            { type: "textarea", name: "low_pressure_response", label: "What would make it easier for someone kind to respond?", hint: "A tiny first message, a shared prompt, no instant decision, a public setting, a slow reply window, an opt-in intro, humour, or permission to pass?" }
          ]
        },
        {
          title: "My Selected Permissions",
          fields: [
            {
              type: "checkboxes",
              name: "shareable_parts",
              label: "Which parts of my .md am I choosing to make available?",
              options: [
                ["public_title", "Public title"],
                ["general_values", "General values or interests"],
                ["connection_type", "Connection type"],
                ["broad_location", "Broad location or distance comfort"],
                ["pace", "Preferred pace"],
                ["response_prompt", "Response prompt"],
                ["boundary_summary", "Boundary summary"],
                ["trusted_intro_only", "Trusted-introduction note only"]
              ]
            },
            {
              type: "select",
              name: "use_scope",
              label: "Where may the selected parts be used?",
              options: [
                ["keep_private", "Keep private for now"],
                ["one_chosen_person", "One chosen person"],
                ["trusted_introduction", "Trusted introduction only"],
                ["chosen_small_circle", "Chosen small circle"],
                ["commons_matching", "Commons matching with my permission"],
                ["community_visible", "Community-visible notice"],
                ["public_web", "Public web"]
              ]
            },
            { type: "textarea", name: "private_by_default", label: "What stays private unless I choose again?", hint: "Names, exact location, diagnosis, family history, attraction, body details, money, conflict, contact details, anything still uncertain, or anything not explicitly selected?" },
            { type: "textarea", name: "permission_check", label: "When do I want to be asked again?", hint: "Before matching, before an introduction, before AI summarises, before public posting, after time passes, when feelings change, or whenever someone asks for more detail?" }
          ]
        },
        {
          title: "First Contact Comfort",
          fields: [
            { type: "textarea", name: "welcome_responses", label: "What kinds of responses would feel welcome?", hint: "A short hello, a shared interest, a gentle question, an invitation, a story, a practical offer, a slower conversation, or a trusted introduction?" },
            { type: "textarea", name: "not_welcome", label: "What would raise anxiety or feel like pressure?", hint: "Demands, sexualised assumptions, instant intimacy, diagnosis talk, advice, interrogation, public tagging, urgency, sales energy, or asking for private details too soon?" },
            { type: "textarea", name: "first_step_container", label: "What container would make first contact safer?", hint: "A commons message, moderated intro, public activity, group setting, slow email, voice note later, trusted helper, or another permission check before direct contact?" }
          ]
        },
        {
          title: "Owner-Controlled Use",
          fields: [
            { type: "textarea", name: "allowed_uses", label: "What may the commons do with the selected parts?", hint: "Showing them, matching from them, helping with an introduction, holding them privately, summarising them, inviting a response, or doing nothing until I say so?" },
            { type: "textarea", name: "not_allowed_uses", label: "What is not allowed without asking me again?", hint: "Copying, reposting, profiling, ranking, inferring desire, sharing health or family context, keeping contact details, or using it for AI memory?" },
            { type: "textarea", name: "change_or_withdraw", label: "How can I change, pause or withdraw this .md?", hint: "Editing it, replacing it, deleting it, turning off matching, setting an expiry date, or asking a chosen helper to remove the shared copy?" }
          ]
        }
      ]
    },
    higherMinds: {
      title: "Gentle AI Support",
      schema: "grey_area_commons.higher_minds_protocol.v0",
      filename: "higher-minds-protocol.md",
      intro: "Guidance for AI helpers and trusted higher-mind systems. Their job is to make loving connection calmer, clearer and more consensual, not to infer what people have not shared.",
      sections: [
        {
          title: "How AI Can Reduce Anxiety",
          fields: [
            {
              type: "checkboxes",
              name: "allowed_actions",
              label: "AI or a trusted helper may",
              options: [
                ["organise_questions", "Organise gentle questions"],
                ["summarise_private_for_self", "Summarise private notes for the person only"],
                ["suggest_next_questions", "Suggest a kinder next question"],
                ["detect_missing_permissions", "Notice missing consent or sharing layers"],
                ["draft_public_safe_copy", "Draft public-safe wording for review"],
                ["compare_with_permission", "Compare two records only with explicit permission"]
              ]
            },
            {
              type: "checkboxes",
              name: "always_ask_first",
              label: "AI must ask first before",
              options: [
                ["infer_identity", "Before inferring identity"],
                ["infer_attraction", "Before inferring attraction or compatibility"],
                ["share_between_people", "Before sharing between people"],
                ["store_memory", "Before storing memory"],
                ["publish_summary", "Before publishing any summary"],
                ["contact_person", "Before contacting or introducing anyone"]
              ]
            },
            { type: "textarea", name: "tone", label: "What tone would make AI feel less weird here?", hint: "Plain, warm, patient, adult, careful, curious, direct, non-salesy, Australian, spiritual, practical, playful, soft, or quiet?" }
          ]
        },
        {
          title: "When AI Must Step Back",
          fields: [
            { type: "textarea", name: "refuse", label: "AI must pause when", hint: "Something seems illegal, minor-related, coercive, exploitative, unsafe, non-consensual, privacy-breaking, manipulative, too intense, or too emotionally hot?" },
            { type: "textarea", name: "escalate", label: "What belongs back with humans?", hint: "Judgement calls that need a person rather than an automated answer?" },
            { type: "textarea", name: "audit_trail", label: "What should be remembered as a permission note?", hint: "Dates, consent changes, no-go lines, who approved what, or what must be deleted or re-checked?" }
          ]
        }
      ]
    }
  };

  const builderOrder = [
    "basicAura",
    "connections",
    "permissions",
    "higherMinds",
    "clinicalPathway",
    "noticeboards"
  ];

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    }[char]));
  }

  function readStore() {
    try {
      return JSON.parse(sessionStorage.getItem(storageKey) || "{}");
    } catch (error) {
      return {};
    }
  }

  function writeStore(store) {
    sessionStorage.setItem(storageKey, JSON.stringify(store));
  }

  function lines(value) {
    return String(value || "")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  }

  function yamlScalar(value) {
    return '"' + String(value || "TODO").replace(/"/g, '\\"') + '"';
  }

  function yamlList(items, indent = "  ") {
    if (!items.length) return indent + "- TODO";
    return items.map((item) => indent + "- " + yamlScalar(item)).join("\n");
  }

  function displayDate() {
    return new Date().toLocaleDateString("en-AU", { day: "2-digit", month: "2-digit", year: "numeric" });
  }

  function fieldOptions(field) {
    return (field.options || []).map(([value, label]) => ({ value, label }));
  }

  function fieldValue(field, data) {
    const value = data[field.name];
    if (field.type === "checkboxes") return Array.isArray(value) ? value : [];
    if (field.type === "singleCheck") return value === true || value === "true";
    return typeof value === "string" ? value : "";
  }

  function renderInput(field, data) {
    const value = fieldValue(field, data);
    if (field.type === "textarea") {
      return `<textarea id="${field.name}" name="${field.name}">${escapeHtml(value)}</textarea>`;
    }
    if (field.type === "select") {
      return `<select id="${field.name}" name="${field.name}">
        <option value="">Choose one</option>
        ${fieldOptions(field).map((option) => `<option value="${escapeHtml(option.value)}"${value === option.value ? " selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
      </select>`;
    }
    if (field.type === "radio") {
      return `<div class="option-grid">
        ${fieldOptions(field).map((option) => `<label><input type="radio" name="${field.name}" value="${escapeHtml(option.value)}"${value === option.value ? " checked" : ""}> ${escapeHtml(option.label)}</label>`).join("")}
      </div>`;
    }
    if (field.type === "checkboxes") {
      return `<div class="option-grid">
        ${fieldOptions(field).map((option) => `<label><input type="checkbox" name="${field.name}" value="${escapeHtml(option.value)}"${value.includes(option.value) ? " checked" : ""}> ${escapeHtml(option.label)}</label>`).join("")}
      </div>`;
    }
    if (field.type === "singleCheck") {
      return `<label class="single-check"><input type="checkbox" name="${field.name}" value="true"${value ? " checked" : ""}> <span>${escapeHtml(field.label)}</span></label>`;
    }
    return `<input id="${field.name}" name="${field.name}" type="text" value="${escapeHtml(value)}">`;
  }

  function renderField(field, data) {
    if (field.type === "singleCheck") {
      return `<div class="field">${renderInput(field, data)}</div>`;
    }
    return `<div class="field">
      <label for="${field.name}">${escapeHtml(field.label)}</label>
      ${field.hint ? `<p class="field-hint">${escapeHtml(field.hint)}</p>` : ""}
      ${renderInput(field, data)}
    </div>`;
  }

  function renderForm(builder, data) {
    return builder.sections.map((section) => `
      <fieldset>
        <legend>${escapeHtml(section.title)}</legend>
        ${section.fields.map((field) => renderField(field, data)).join("")}
      </fieldset>
    `).join("");
  }

  function getFormData(form, builder) {
    const data = {};
    builder.sections.forEach((section) => {
      section.fields.forEach((field) => {
        if (field.type === "checkboxes") {
          data[field.name] = [...form.querySelectorAll(`input[name="${field.name}"]:checked`)].map((input) => input.value);
        } else if (field.type === "singleCheck") {
          data[field.name] = Boolean(form.querySelector(`input[name="${field.name}"]:checked`));
        } else if (field.type === "radio") {
          const checked = form.querySelector(`input[name="${field.name}"]:checked`);
          data[field.name] = checked ? checked.value : "";
        } else {
          data[field.name] = form.elements[field.name] ? form.elements[field.name].value : "";
        }
      });
    });
    return data;
  }

  function optionLabels(field, values) {
    const map = new Map(fieldOptions(field).map((option) => [option.value, option.label]));
    return values.map((value) => map.get(value) || value);
  }

  function markdownForField(field, data) {
    const value = fieldValue(field, data);
    const label = field.markdownLabel || field.label;
    if (field.type === "checkboxes") {
      return [`### ${label}`, "", yamlList(optionLabels(field, value), ""), ""].join("\n");
    }
    if (field.type === "singleCheck") {
      return [`### ${label}`, "", value ? "Confirmed by user." : "Not confirmed.", ""].join("\n");
    }
    if (field.type === "select" || field.type === "radio") {
      const labels = optionLabels(field, value ? [value] : []);
      return [`### ${label}`, "", labels[0] || "No response provided.", ""].join("\n");
    }
    return [`### ${label}`, "", String(value || "No response provided.").trim(), ""].join("\n");
  }

  function buildMarkdown(builder, data) {
    const defaultVisibility = data.default_visibility || data.default_clinical_visibility || "self_managed";
    const content = [
      "---",
      `schema: ${builder.schema}`,
      "status: draft_for_self_review",
      "adult_only: true",
      "storage: local_browser_session_only",
      `generated: ${yamlScalar(displayDate())}`,
      `default_visibility: ${yamlScalar(defaultVisibility)}`,
      "not_legal_advice: true",
      "---",
      "",
      `# ${builder.title}`,
      "",
      builder.intro,
      "",
      "This Markdown file was generated locally in the browser. The person controls the file and how it is used. Treat it as a self-reflection and selective-sharing draft; only selected parts may be shared through the commons, and only with the permissions named here.",
      ""
    ];

    builder.sections.forEach((section) => {
      content.push(`## ${section.title}`, "");
      section.fields.forEach((field) => content.push(markdownForField(field, data)));
    });

    content.push(
      "---",
      "",
      "## Commons sharing boundaries",
      "",
      "- Adult-only and lawful.",
      "- Share selected parts only; private reflection stays private by default.",
      "- No minors, coercion, exploitation, stalking, doxxing, pressure or privacy breaking.",
      "- Questions should reduce anxiety and support willing connection.",
      "- AI helpers must ask before inferring, matching, storing or publishing.",
      "- The person may change or withdraw permission later.",
      ""
    );

    return content.join("\n");
  }

  function downloadText(filename, text) {
    const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function setStatus(node, message) {
    if (!node) return;
    node.textContent = message;
    window.clearTimeout(setStatus.timer);
    setStatus.timer = window.setTimeout(() => {
      node.textContent = "";
    }, 2800);
  }

  function copyText(text, statusNode, message) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => setStatus(statusNode, message),
        () => fallbackCopy(text, statusNode, message)
      );
      return;
    }
    fallbackCopy(text, statusNode, message);
  }

  function fallbackCopy(text, statusNode, message) {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.left = "-9999px";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
    setStatus(statusNode, message);
  }

  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector("#nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    links.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLAnchorElement)) return;
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  }

  function initBuilderPage() {
    const root = document.querySelector("[data-builder]");
    if (!root) return;
    const builderId = root.getAttribute("data-builder");
    const builder = builders[builderId];
    const form = document.querySelector("[data-builder-form]");
    const output = document.querySelector("[data-markdown-output]");
    const status = document.querySelector("[data-status]");
    if (!builder || !form || !output) return;

    const store = readStore();
    const saved = store[builderId] || {};
    form.innerHTML = renderForm(builder, saved);

    function sync() {
      const nextStore = readStore();
      const data = getFormData(form, builder);
      nextStore[builderId] = data;
      nextStore.updatedAt = new Date().toISOString();
      writeStore(nextStore);
      output.value = buildMarkdown(builder, data);
    }

    output.value = buildMarkdown(builder, saved);
    form.addEventListener("input", sync);
    form.addEventListener("change", sync);
    form.addEventListener("submit", (event) => event.preventDefault());

    document.querySelector("[data-download-md]")?.addEventListener("click", () => {
      sync();
      downloadText(builder.filename, output.value);
      setStatus(status, `${builder.filename} is ready.`);
    });
    document.querySelector("[data-copy-md]")?.addEventListener("click", () => {
      sync();
      copyText(output.value, status, "Markdown copied.");
    });
    document.querySelector("[data-clear-builder]")?.addEventListener("click", () => {
      if (!window.confirm("Clear answers for this page from the browser session?")) return;
      const nextStore = readStore();
      delete nextStore[builderId];
      writeStore(nextStore);
      form.innerHTML = renderForm(builder, {});
      output.value = buildMarkdown(builder, {});
      setStatus(status, "This page is clear.");
    });
  }

  function buildPack(store) {
    const linesOut = [
      "---",
      "schema: grey_area_commons.pack.v0",
      "status: draft_for_self_review",
      "adult_only: true",
      "storage: local_browser_session_only",
      `generated: ${yamlScalar(displayDate())}`,
      "---",
      "",
      "# Grey Area Commons Markdown Pack",
      "",
      "This combined file gathers local browser drafts from the Grey Area Commons forms. It is for self-review and trusted human review only unless a separate permission says otherwise.",
      ""
    ];

    builderOrder.forEach((builderId) => {
      const builder = builders[builderId];
      linesOut.push("", "<!-- " + builder.filename + " -->", "");
      linesOut.push(buildMarkdown(builder, store[builderId] || {}));
    });

    return linesOut.join("\n");
  }

  function initExportPage() {
    const output = document.querySelector("[data-combined-output]");
    const list = document.querySelector("[data-export-list]");
    const status = document.querySelector("[data-status]");
    if (!output || !list) return;

    function render() {
      const store = readStore();
      output.value = buildPack(store);
      list.innerHTML = builderOrder.map((builderId) => {
        const builder = builders[builderId];
        const hasData = Boolean(store[builderId] && Object.keys(store[builderId]).length);
        const page = {
          basicAura: "aura-profile.html",
          permissions: "permissions.html",
          connections: "connections.html",
          clinicalPathway: "clinical-pathway.html",
          noticeboards: "noticeboards.html",
          higherMinds: "higher-minds.html"
        }[builderId];
        return `<article class="export-item">
          <strong>${escapeHtml(builder.title)}</strong>
          <span>${hasData ? "Draft answers found in this browser session." : "No answers yet. Blank draft included."}</span>
          <a href="${page}">Open builder</a>
        </article>`;
      }).join("");
    }

    render();

    document.querySelector("[data-download-pack]")?.addEventListener("click", () => {
      render();
      downloadText("grey-area-commons-pack.md", output.value);
      setStatus(status, "grey-area-commons-pack.md is ready.");
    });
    document.querySelector("[data-copy-pack]")?.addEventListener("click", () => {
      render();
      copyText(output.value, status, "Markdown pack copied.");
    });
    document.querySelector("[data-clear-all]")?.addEventListener("click", () => {
      if (!window.confirm("Clear all Grey Area Commons answers from this browser session?")) return;
      sessionStorage.removeItem(storageKey);
      render();
      setStatus(status, "All answers are clear.");
    });
  }

  initNav();
  initBuilderPage();
  initExportPage();
})();
